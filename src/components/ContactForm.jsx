   import { useState } from "react";


// This form uses "controlled inputs" — each input's value is tied to
// a piece of state (form.name, form.email, form.message), and every
// keystroke updates that state via onChange. React is the single
// source of truth for what's currently in the form.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page
    setSent(true);
    // NOTE: this is a demo form — it doesn't send an email anywhere
    // yet. Wire it up to a service like Formspree or EmailJS when
    // you deploy for real.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="px-4 py-3 bg-transparent border outline-none"
        style={{ borderColor: "#5A4F42", color: "#FAF6F0" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="px-4 py-3 bg-transparent border outline-none"
        style={{ borderColor: "#5A4F42", color: "#FAF6F0" }}
      />
      <textarea
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        className="px-4 py-3 bg-transparent border outline-none resize-none"
        style={{ borderColor: "#5A4F42", color: "#FAF6F0" }}
      />
      <button
        type="submit"
        className="px-6 py-3 text-sm self-start"
        style={{ backgroundColor: "#C9A98A", color: "#2B2620" }}
      >
        {sent ? "Sent ✓" : "Send message"}
      </button>

      {/* Only shows after a successful submit — conditional rendering again */}
      {sent && (
        <p className="text-sm" style={{ color: "#C9A98A" }}>
          Thanks! I'll get back to you as soon as I can.
        </p>
      )}
    </form>
  );
}
