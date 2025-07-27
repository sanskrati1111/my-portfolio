// src/pages/Experience.js
import { motion } from "framer-motion";
export default function Experience() {
  const experiences = [
    {
      title: "System Engineer",
      company: "TCS",
      date: "2024 – Present",
      description:
        "Transitioned into a Java Developer role, focusing on backend services using Core Java and Spring Boot.Developed and maintained RESTful APIs, optimized system performance, and implemented bug fixes. Actively contributed to code reviews, documentation, and followed best coding practices for scalable systems. Known for quick learning, ownership mindset, and smooth shift from support to full-fledged development responsibilities.",
    },
    {
      title: "DevOps Support",
      company: "TCS",
      date: "2023 – 2024",
      description:
        "Handled L2/L3 support including server monitoring, patching, and upgrades to ensure uptime and reliability.Managed Kubernetes clusters using OpenLens for application stability.Supported enterprise tools like qTest, VERA, JIRA, ALM QC, and Confluence, resolving user queries and technical issues. Contributed to automation and QA processes in Agile sprints, ensuring quality and smooth deployments. Gained hands-on exposure to Docker, React.js, and DevOps practices while assisting cross-functional teams."
    },
  ];

  return (
    <section
  id="experience"
  className="parallax-bg relative text-white px-6 py-24 flex justify-center"
>
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  {/* Blurred blobs */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-10 blur-2xl rounded-full z-0"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-500 opacity-10 blur-3xl rounded-full z-0"></div>

  <div className="relative z-10 max-w-4xl w-full">
    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-12 text-center">
      Experience
    </h2>

    <div className="space-y-12 border-l-2 border-indigo-600 pl-6">
      {experiences.map((exp, index) => (
        <motion.div
    key={index}
    className="group relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
          <div className="absolute -left-3 top-1.5 w-3 h-3 bg-indigo-400 rounded-full shadow-lg"></div>
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300 group-hover:text-pink-400 transition">
            {exp.title}
          </h3>
          <p className="text-sm text-gray-400 mb-1">
            {exp.company} • {exp.date}
          </p>
          <p className="text-gray-300 leading-relaxed">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
