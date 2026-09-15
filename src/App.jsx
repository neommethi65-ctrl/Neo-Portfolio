import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// App is the "root" component — it doesn't render much itself, it
// just assembles the smaller pieces in order. This is "component
// composition": small, focused components combined into a full page.
export default function App() {
  return (
    <div style={{ backgroundColor: "#FAF6F0", color: "#201A17" }} className="min-h-screen font-sans">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
