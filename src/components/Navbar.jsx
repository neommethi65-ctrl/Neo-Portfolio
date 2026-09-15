import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../utils";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  // menuOpen is state because it changes while the page is open
  // (the user taps the menu icon), and the page needs to re-render
  // when it does.
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className="sticky top-0 z-20 px-6 md:px-12 py-5 flex items-center justify-between"
        style={{ backgroundColor: "#FAF6F0", borderBottom: "1px solid #E4DED2" }}
      >
        <button onClick={() => handleClick("home")} className="font-serif text-xl">
          Neo Mmethi
        </button>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="text-sm hover:opacity-60 transition-opacity"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Only rendered when menuOpen is true — this is "conditional rendering" */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-6 py-4 gap-3"
          style={{ backgroundColor: "#FAF6F0", borderBottom: "1px solid #E4DED2" }}
        >
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => handleClick(link.id)} className="text-sm text-left">
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
