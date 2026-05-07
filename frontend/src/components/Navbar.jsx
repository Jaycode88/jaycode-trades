import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0C1F3F] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="text-white text-xl font-semibold tracking-tight">
          Jay<span className="text-[#E8FF47]">Code</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#7BA3CC] hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[#E8FF47] text-[#0C1F3F] text-sm font-semibold px-5 py-2 rounded hover:brightness-110 transition-all duration-200"
        >
          Get a quote
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "block w-6 h-0.5 bg-white rotate-45 translate-y-2" : "block w-6 h-0.5 bg-white"} />
          <span className={menuOpen ? "hidden" : "block w-6 h-0.5 bg-white"} />
          <span className={menuOpen ? "block w-6 h-0.5 bg-white -rotate-45 -translate-y-2" : "block w-6 h-0.5 bg-white"} />
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0C1F3F] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#7BA3CC] hover:text-white text-sm transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#E8FF47] text-[#0C1F3F] text-sm font-semibold px-5 py-2 rounded text-center hover:brightness-110 transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
