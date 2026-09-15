import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../utils";
import profilePic from "../assets/images/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-[1.15fr,1fr] gap-10 items-stretch">
        <div>
          <p className="text-sm mb-6" style={{ color: "#8A7B6C" }}>
            Junior developer, Pretoria, South Africa
          </p>
          <h1 className="font-serif leading-[0.95] mb-8" style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}>
            I build things
            <br />
            for the web.
          </h1>
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-lg leading-relaxed" style={{ color: "#4A3F36" }}>
              Currently learning React and sharpening my JavaScript, one real
              project at a time  not just tutorials.
            </p>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 text-sm border-b pb-1 self-start"
              style={{ borderColor: "#201A17" }}
            >
              View my work <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Simple profile placeholder — a plain styled div with initials.
            No image file and no extra package needed. Swap this <div>
            for an <img src="..." /> once you have a real photo. */}
        <div className="flex items-center justify-center md:justify-end h-full">
         <img
  src={profilePic}
  alt="Neo Mmethi"
  style={{
    width: "240px",
    height: "340px",
    objectFit: "cover",
    borderRadius: "4px",
  }}
/>
        </div>
      </div>
    </section>
  );
}
