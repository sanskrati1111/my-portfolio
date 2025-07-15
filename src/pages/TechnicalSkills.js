import { motion } from "framer-motion";
const skillData = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "si-javascript", tip: "2+ years experience" },
      { name: "TypeScript", icon: "si-typescript", tip: "1 year" },
      { name: "Python", icon: "si-python", tip: "Scripting & automation" },
      { name: "Shell", icon: "si-gnubash", tip: "Bash scripting" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "si-react", tip: "Main UI framework" },
      { name: "Next.js", icon: "si-nextdotjs", tip: "SSR & SSG" },
      { name: "Tailwind CSS", icon: "si-tailwindcss", tip: "Utility-first styling" },
      { name: "HTML", icon: "si-html5", tip: "Markup language" },
      { name: "CSS", icon: "si-css3", tip: "Styling & layout" },
      { name: "Figma", icon: "si-figma", tip: "UI design collaboration" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "si-node-dot-js", tip: "JS backend runtime" },
      { name: "Firebase", icon: "si-firebase", tip: "Realtime DB & Auth" },
      { name: "NextAuth", icon: "si-auth0", tip: "Auth for Next.js" },
      { name: "Express.js", icon: "si-express", tip: "Node.js framework" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "si-mongodb", tip: "NoSQL DB" },
      { name: "PostgreSQL", icon: "si-postgresql", tip: "Relational DB" },
      { name: "MySQL", icon: "si-mysql", tip: "Legacy DB experience" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "si-git", tip: "Version control" },
      { name: "GitHub", icon: "si-github", tip: "Repo hosting" },
      { name: "Jira", icon: "si-jira", tip: "Agile project tracking" },
      { name: "AWS", icon: "si-amazonaws", tip: "Cloud services" },
      { name: "S3", icon: "si-amazon", tip: "Static hosting" },
      { name: "Vercel", icon: "si-vercel", tip: "Next.js deployment" },
      { name: "Postman", icon: "si-postman", tip: "API testing" },
    ],
  },
  {
    title: "Development Concepts",
    skills: [
      { name: "REST APIs", icon: "si-apache", tip: "API design principles" },
      { name: "CI/CD", icon: "si-circleci", tip: "Automation pipelines" },
      { name: "OAuth", icon: "si-oauth", tip: "Token-based auth" },
      { name: "Microservices", icon: "si-docker", tip: "Service architecture" },
      { name: "Cloud Hosting", icon: "si-googlecloud", tip: "SaaS deployment" },
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white px-6 py-24 flex justify-center"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 opacity-10 blur-2xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillData.map((category, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-600 rounded-xl p-6 shadow-md hover:shadow-pink-500/40 hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-center gap-2 px-3 py-2 bg-black border border-indigo-500 text-white text-sm rounded-lg transition hover:bg-indigo-700"
                  >
                    <i className={`si ${skill.icon} text-lg`}></i>
                    {skill.name}
                    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                      {skill.tip}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
