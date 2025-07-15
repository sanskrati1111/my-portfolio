// src/pages/Experience.js
export default function Experience() {
  const experiences = [
    {
      title: "Application Support Engineer",
      company: "Pfizer (via Cognizant)",
      date: "2023 – Present",
      description:
        "Providing end-to-end support for tools like qTest, VERA, ALMQC, JIRA, and AQM. Ensuring change control, bug tracking, and vendor coordination for lifecycle improvements.",
    },
    {
      title: "DevOps Intern",
      company: "Cognizant",
      date: "2022 – 2023",
      description:
        "Worked on CI/CD pipelines, automated test runs, monitored environments, and collaborated with the Digital Transformation team on Jira Align + Vera integration.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-black text-white px-6 py-24 flex justify-center"
    >
      {/* Blurred glowing blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12 border-l-2 border-indigo-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-indigo-400 rounded-full shadow-lg"></div>
              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300 group-hover:text-pink-400 transition">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                {exp.company} • {exp.date}
              </p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
