// src/pages/Newsletter.js
export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="relative bg-black text-white px-6 py-24 flex justify-center"
    >
      {/* Blurred Background */}
      <div className="absolute -top-20 left-20 w-60 h-60 bg-indigo-500 opacity-10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-purple-500 opacity-10 blur-2xl rounded-full"></div>

      <div className="relative z-10 max-w-xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-gray-300 mb-8">
          Subscribe to my newsletter for portfolio updates, tips, and new projects.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed! 🚀");
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-2/3 px-5 py-3 rounded-lg bg-gray-900 text-white border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-pink-600 text-white rounded-lg shadow-lg transition font-medium"
          >
            Subscribe 💌
          </button>
        </form>
      </div>
    </section>
  );
}
