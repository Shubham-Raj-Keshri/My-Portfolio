export default function Projects() {
  const projects = [
    // 1 Klue Drinks / Brand Website
    {
      title: "Klue Drinks – Brand Website & E-Commerce UI",
      description:
        "Built and deployed a responsive React-based brand website using Tailwind CSS and React Router. Implemented reusable UI components, smooth client-side navigation, and cart state management while solving real-world GitHub Pages deployment challenges.",
      tech: ["React", "Tailwind CSS", "React Router", "Context API"],
      demo: "https://shubham-raj-keshri.github.io/klue-drink/",
      github: "https://shubham-raj-keshri.github.io/klue-drink/",
    },

    // 2 Fashion Cube – E-commerce App
    {
      title: "Fashion Cube – E-commerce Web Application",
      description:
        "A responsive fashion e-commerce application featuring product listings, categories, cart functionality, authentication flow, and scalable frontend architecture.",
      tech: [
        "React",
        "Redux",
        "Redux Thunk",
        "React Router",
        "SCSS",
        "Bootstrap",
        "Axios",
        "AOS Animation",
      ],
      demo: "#",
      github: "#",
    },

    // 3 Jewel’s Galore – Full-Stack E-commerce
    {
      title: "Jewel’s Galore – Full-Stack E-commerce Website",
      description:
        "A full-stack jewellery e-commerce platform with modern UI, dynamic product management, REST APIs, backend integration, and deployment using GitHub Pages.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript (ES6+)",
      ],
      demo: "https://shubham-raj-keshri.github.io/Jewel-s-Galore/",
      github: "https://github.com/Shubham-Raj-Keshri/Jewel-s-Galore",
    },

    // 4 Responsive Grocery Website
    {
      title: "Responsive Grocery Website",
      description:
        "A fully responsive grocery website with SwiperJS sliders, search functionality, login modal, shopping cart UI, and smooth DOM-based interactions.",
      tech: ["HTML", "CSS", "JavaScript", "SwiperJS"],
      demo: "https://shubham-raj-keshri.github.io/Responsive-Burger/",
      github: "https://shubham-raj-keshri.github.io/Responsive-Burger/",
    },

    // 5 Todo App – React State Management
    {
      title: "Todo App – React State Management",
      description:
        "A clean and minimal Todo application focused on React state management, allowing users to add, delete, complete, and filter tasks efficiently.",
      tech: ["React", "JavaScript"],
      demo: "#",
      github: "#",
    },

    // 6 Student LMS Project
    {
      title: "Student Learning & Training Portal (LMS)",
      description:
        "A learning management system supporting course creation, assessments, quizzes, SCORM packages, reusable templates, and QA-tested workflows.",
      tech: ["HTML", "CSS", "JavaScript", "LMS", "SCORM", "QA Testing"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Featured <span className="text-orange-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg mb-14">
          Real-world projects built using modern tools, clean UI/UX, scalable
          architecture, and industry best practices.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 
              hover:scale-105 transition-all duration-300 shadow-xl hover:border-orange-500"
            >
              {/* Optional Image */}
              {project.image && (
                <div className="overflow-hidden rounded-xl mb-5 border border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl hover:scale-110 duration-500"
                  />
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 font-semibold"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
