import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 md:px-12 lg:px-16">
      <nav className="liquid-glass flex items-center rounded-xl px-4 py-2">
        <img
  src="/logo.png"
  alt="Bawani Estates"
  className="h-16 w-auto object-contain scale-150 origin-left"
/>

  <div className="hidden gap-8 text-sm md:flex ml-auto mr-10">
          <Link to="/" className="transition hover:text-gray-300">
            Home
          </Link>

          <Link to="/about" className="transition hover:text-gray-300">
            About
          </Link>

          <Link to="/services" className="transition hover:text-gray-300">
            Services
          </Link>

          <Link to="/contact" className="transition hover:text-gray-300">
            Contact
          </Link>
        </div>
<button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
        <a
  href="https://wa.me/923202481500"
  target="_blank"
  rel="noopener noreferrer"
 className="hidden md:block rounded-lg bg-white px-6 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:scale-105"
>
  Start a Chat
</a>
      </nav>
      {menuOpen && (
  <div className="liquid-glass mt-3 rounded-xl p-4 md:hidden">
    <div className="flex flex-col gap-4">

      <Link to="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>

      <Link to="/about" onClick={() => setMenuOpen(false)}>
        About
      </Link>

      <Link to="/services" onClick={() => setMenuOpen(false)}>
        Services
      </Link>

      <Link to="/contact" onClick={() => setMenuOpen(false)}>
        Contact
      </Link>

    </div>
  </div>
)}
    </div>
  );
}