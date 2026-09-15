import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
      style={{ backgroundColor: "#FAF6F0", color: "#8A7B6C" }}
    >
      <span>© 2026 Neo Mmethi</span>

      <div className="flex gap-4">
        <a
          href="https://github.com/neommethi65-ctrl"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:opacity-60"
          style={{ color: "#8A7B6C" }}
        >
          <GithubIcon size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/neo-mmethi-712a71435"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-60"
          style={{ color: "#8A7B6C" }}
        >
          <LinkedinIcon size={18} />
        </a>
      </div>
    </footer>
  );
}
