import Reveal from "../components/Reveal";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="px-6 md:px-12 py-16 md:py-20"
        style={{ backgroundColor: "#2B2620", color: "#FAF6F0" }}
      >
        <div className="max-w-2xl">
          <p className="text-sm mb-6" style={{ color: "#C9A98A" }}>
            About
          </p>
          <p className="font-serif leading-snug mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
            "I'm a beginner developer who likes taking things apart to see
            how they work — that curiosity is basically how I ended up
            writing code."
          </p>
          <p className="leading-relaxed" style={{ color: "#D8CFC3" }}>
            I'm currently in a software development bootcamp after finishing
            matric, building up my HTML, CSS, and JavaScript fundamentals
            with React on top. My goal is to grow into a full-stack
            developer right now I'm laying the front-end groundwork, with
            back-end and databases next on the list. Outside of code, you'll
            usually find me planning a trip, experimenting in the kitchen, or
            keeping an eye on what's new in fashion.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
