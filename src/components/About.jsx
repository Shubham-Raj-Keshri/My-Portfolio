export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white px-6 py-20 flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://shubham-raj-keshri.github.io/My-Portfolio/images/Profile%20-pic.jpeg"
            alt="profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border border-gray-700"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="font-semibold text-white">Shubham Raj Keshri</span>, a passionate 
            Frontend Developer specializing in building clean, responsive, and modern web applications. 
            I enjoy crafting intuitive UI/UX using 
            <span className="text-orange-400"> ReactJS, Redux, JavaScript, Tailwind CSS, and REST APIs</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            With hands-on experience delivering <span className="font-semibold text-white">200+ e-learning solutions</span> 
            and developing scalable React projects, I focus on clean architecture, reusable components, state management 
            (Redux + Thunk), and seamless API integration using Axios. I love transforming ideas into beautiful, functional,
            and high-performance digital experiences.
          </p>

          <a
            href="#skills"
            className="inline-block mt-8 bg-orange-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition"
          >
            View My Skills
          </a>
        </div>
      </div>
    </section>
  );
}
