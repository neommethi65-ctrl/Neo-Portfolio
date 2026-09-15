// Smoothly scrolls to a section by its id (used by the navbar and hero button)
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
