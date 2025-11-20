export default function Projects() {
  const projects = [
    // 1️⃣ Fashion Cube – E-commerce App
    {
      title: "Fashion Cube – E-commerce Web Application",
      description:
        "A responsive fashion e-commerce web app featuring product listings, categories, recommendations, cart, and authentication with a scalable architecture.",
      tech: [
        "ReactJS",
        "Redux",
        "Redux Thunk",
        "React Router",
        "Sass (SCSS)",
        "Bootstrap",
        "Axios",
        "AOS Animation",
      ],
      image: "/projects/fashioncube.png",
      demo: "#",
      github: "#",
    },

    // 2️⃣ Jewel’s Galore – Full-Stack E-commerce
    {
      title: "Jewel’s Galore – E-Commerce Website",
      description:
        "A full-stack jewellery e-commerce application with modern UI, backend APIs, dynamic product handling, and deployment using GitHub Pages.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript (ES6+)",
      ],
      image: "/projects/jewelsgalore.png",
      demo: "https://shubham-raj-keshri.github.io/Jewel-s-Galore/",
      github: "https://github.com/Shubham-Raj-Keshri/Jewel-s-Galore",
    },

    // 3️⃣ Responsive Grocery / Restaurant Website
    {
      title: "Responsive Grocery Website",
      description:
        "A fully responsive grocery website with SwiperJS sliders, search form, login modal, shopping cart, auto UI resets, and smooth DOM-based interactions.",
      tech: ["HTML", "CSS", "JavaScript", "SwiperJS"],
      image: "/projects/grocery.png",
      demo: "https://shubham-raj-keshri.github.io/Responsive-Burger/",
      github: "https://shubham-raj-keshri.github.io/Responsive-Burger/",
    },

    // 4️⃣ Brand Page – React Fundamentals Project
    {
      title: "Brand Page – ReactJS UI",
      description:
        "A responsive and visually appealing brand landing page built using ReactJS, showcasing components, props, and state fundamentals.",
      tech: ["ReactJS", "HTML", "CSS"],
      image: "/projects/brand.png",
      demo: "#",
      github: "#",
    },

    // 5️⃣ Todo App – React State Management Practice
    {
      title: "Todo App",
      description:
        "A simple and clean Todo app focusing on React state management, allowing users to add, delete, complete, and filter tasks.",
      tech: ["React", "JavaScript"],
      image: "/projects/todo.png",
      demo: "#",
      github: "#",
    },

    // 6️⃣ Student LMS Project from Resume
    {
      title: "Student Learning & Training Portal (LMS)",
      description:
        "A learning management system for creating, reviewing, and publishing online courses, assessments, quizzes, SCORM packages, and reusable templates.",
      tech: ["HTML", "CSS", "JavaScript", "LMS", "SCORM", "QA Testing"],
      image: "/projects/lms.png",
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
        Real-world projects built using modern tools, clean UI/UX, scalable architecture,
        and industry best practices.
      </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 
              hover:scale-105 transition-all duration-300 shadow-xl hover:border-orange-500 group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-5 border border-gray-800 group-hover:border-orange-500 transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl group-hover:scale-110 duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.demo}
                  className="text-orange-500 hover:text-orange-400 font-semibold"
                  target="_blank"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
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
