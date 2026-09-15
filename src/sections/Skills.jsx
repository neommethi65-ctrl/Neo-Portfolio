import Reveal from "../components/Reveal";
import { skills } from "../data/projects";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="px-6 md:px-12 py-16 md:py-20 border-b" style={{ borderColor: "#E4DED2" }}>
        <p className="text-sm mb-8" style={{ color: "#8A7B6C" }}>
          Currently learning
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {/* .map() turns each string in the skills array into a <span> —
              this is how React renders lists, no manual copy-pasting */}
          {skills.map((skill) => (
            <span key={skill} className="font-serif" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
