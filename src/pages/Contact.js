// src/pages/Contact.js
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white px-6 py-24 flex justify-center"
    >
      {/* Blurred glowing background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-600 opacity-10 rounded-full blur-2xl"></div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-10">
          Have a question, feedback, or project idea? Drop me a message!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully! 🚀");
          }}
          className="space-y-6 text-left"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Message</label>
            <textarea
              rows="5"
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </section>
  );
}
