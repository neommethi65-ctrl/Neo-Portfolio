import { ArrowUpRight } from "lucide-react";

// ProjectCard is a "reusable" component — instead of writing the card
// markup out 7 times by hand, we write it ONCE here. Projects.jsx
// then calls <ProjectCard project={...} /> once per project, passing
// in different data each time. This is what "props" are for: passing
// data INTO a component from its parent.
export default function ProjectCard({ project }) {
  const { title, desc, tags, bg, url, image } = project;

  return (
    <div style={{ backgroundColor: bg }} className="p-6 md:p-8 flex flex-col gap-5">
      {/* Image area — every project card gets one */}
      <div className="w-full h-40 overflow-hidden" style={{ backgroundColor: "rgba(32,26,23,0.06)" }}>
       <img src={image} alt={`${title} screenshot`} className="w-full h-full object-contain" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl md:text-2xl">{title}</h3>
        {url && (
          <a href={url} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>
            <ArrowUpRight size={22} style={{ color: "#201A17", flexShrink: 0 }} />
          </a>
        )}
      </div>

      <p className="leading-relaxed" style={{ color: "#4A3F36" }}>
        {desc}
      </p>

      <div className="flex flex-wrap gap-3 text-sm" style={{ color: "#6B5D4F" }}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
