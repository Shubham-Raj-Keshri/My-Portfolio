import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          Shubham
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          <li><a href="#home" className="hover:text-orange-400">Home</a></li>
          <li><a href="#about" className="hover:text-orange-400">About</a></li>
          <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-orange-400">Home</a>
          <a href="#about" className="block hover:text-orange-400">About</a>
          <a href="#skills" className="block hover:text-orange-400">Skills</a>
          <a href="#projects" className="block hover:text-orange-400">Projects</a>
          <a href="#contact" className="block hover:text-orange-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
