import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="px-6 md:px-12 py-16 md:py-20">
        <p className="text-sm mb-10" style={{ color: "#8A7B6C" }}>
          Selected work
        </p>
        <div className="flex flex-col gap-6">
          {/* .map() runs once per item in the projects array. Each time
              it returns a <ProjectCard>, passing that project's own data
              in through the "project" prop. "key" just helps React tell
              the cards apart — it needs to be unique per item. */}
          {projects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
