// src/pages/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Spotify Clone 🎧",
      tech: "Next.js, Tailwind CSS, NextAuth, Spotify API, Recoil, TypeScript",
      description:
        "Built a full-featured Spotify clone using Spotify APIs, authentication with NextAuth, state management with Recoil, and styled with Tailwind. Deployed on Vercel.",
      link: "https://your-spotify-clone-link.com", // Replace with your real link
    },
    {
      title: "Chat Application 💬",
      tech: "React.js, Firebase, Chat Engine",
      description:
        "Created a real-time chat app with Google & Facebook authentication, image support, room creation, and live notifications using React and Firebase.",
      link: "https://your-chatapp-link.com", // Replace with your real link
    },
    {
      title: "TexScribe – Video to Text 🔊",
      tech: "Python, IBM Watson, ffmpeg",
      description:
        "Developed a tool that converts video into audio and transcribes it using IBM Watson’s speech-to-text API. Automates the pipeline using Python.",
      link: "https://your-texscribe-link.com", // Replace with your real link
    },
    {
      title: "Digital Transformation Dashboard 📊",
      tech: "Jira Align, Miro, Figma",
      description:
        "Contributed to internal project dashboards integrating Miro boards, Jira Align sprints, and automated reporting for transformation teams.",
      link: "#", // Internal project, so no external link
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black text-white px-6 py-24 flex justify-center"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-600 opacity-10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-700 rounded-xl p-6 shadow-lg hover:shadow-indigo-600/40 transition hover:scale-[1.03] duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-pink-400 transition">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1 mb-2">{proj.tech}</p>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
              <a
                href={proj.link}
                className="text-indigo-400 hover:text-pink-400 font-medium text-sm"
                target="_blank" rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
