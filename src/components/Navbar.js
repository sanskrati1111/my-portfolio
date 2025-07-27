import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black fixed w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-indigo-400 text-xl font-bold">Sanskrati Arya</div>

        {/* Hamburger Button */}
        <div className="sm:hidden">
  <button
    onClick={() => setOpen(!open)}
    className="text-white text-2xl focus:outline-none transition"
  >
    <i className={`fas ${open ? "fa-times" : "fa-bars"} transition duration-200`}></i>
  </button>
</div>


        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 items-center text-sm">
          <a href="#about" className="text-white hover:text-indigo-400">About</a>
          <a href="#experience" className="text-white hover:text-indigo-400">Experience</a>
          <a href="#TechnicalSkills" className="text-white hover:text-indigo-400">Technical Skills</a>
          <a href="#projects" className="text-white hover:text-indigo-400">Projects</a>
          <a href="#newsletter" className="text-white hover:text-indigo-400">Contact</a>
          <a
            href="/sanskrati-resume_.pdf"
            download
            className="text-white border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
{open && (
  <div
    className="sm:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 animate-slideDown"
  >
    <a href="#about" className="block text-white hover:text-indigo-400">About</a>
    <a href="#experience" className="block text-white hover:text-indigo-400">Experience</a>
    <a href="#TechnicalSkills" className="text-white hover:text-indigo-400">Technical Skills</a>
    <a href="#projects" className="block text-white hover:text-indigo-400">Projects</a>
    <a href="#newsletter" className="block text-white hover:text-indigo-400">Contact</a>
    <a
      href="/sanskrati-resume.pdf"
      download
      className="block text-white border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white transition"
    >
      Resume
    </a>
  </div>
)}

    </header>
  );
}
