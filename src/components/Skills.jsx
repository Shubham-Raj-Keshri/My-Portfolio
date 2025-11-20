import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-blue-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={40} className="text-red-500" /> },
    { name: "REST APIs", icon: <SiPostman size={40} className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-4xl text-center font-bold mb-12">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center 
            gap-3 shadow-lg hover:border-orange-500 hover:scale-105 transition-all duration-300"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
