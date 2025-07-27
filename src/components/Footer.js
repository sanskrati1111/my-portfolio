// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 relative border-t border-gray-800">
      {/* Background glow */}
      {/* <div className="absolute top-0 left-0 w-32 h-32 bg-pink-600 opacity-10 blur-2xl rounded-full"></div> */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sanskrati Arya. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/sanskrati1111"
            target="_blank"
            rel="noopener noreferrer"
             className="text-gray-400 hover:text-indigo-400 transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sanskrati-arya-159947166/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:sanskratiarya14@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
