import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="px-6 md:px-12 py-20 md:py-28"
        style={{ backgroundColor: "#2B2620", color: "#FAF6F0" }}
      >
        <p className="text-sm mb-6" style={{ color: "#C9A98A" }}>
          Contact
        </p>
        <h2 className="font-serif leading-none mb-10" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          Let's talk.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <p className="mb-6 leading-relaxed" style={{ color: "#D8CFC3" }}>
              Reach me directly at{" "}
              <a href="mailto:neommethi65@gmail.com" className="underline" style={{ color: "#FAF6F0" }}>
                neommethi65@gmail.com
              </a>
              , or use the form.
            </p>
            <div className="flex gap-6">
              <a href="mailto:neommethi65@gmail.com" aria-label="Email" style={{ color: "#FAF6F0" }} className="hover:opacity-60">
                <Mail size={22} />
              </a>
              <a
                href="https://github.com/neommethi65-ctrl"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{ color: "#FAF6F0" }}
                className="hover:opacity-60"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/neo-mmethi-712a71435"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#FAF6F0" }}
                className="hover:opacity-60"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </Reveal>
  );
}
