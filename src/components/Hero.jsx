export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <div className="max-w-4xl text-center">

        <p className="text-gray-400 text-lg">Hi, I'm</p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
          Shubham Raj Keshri
        </h1>

        <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold mt-4">
          Frontend Developer • ReactJS Developer
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed text-lg md:text-xl">
          Frontend Developer skilled in React, Redux, JavaScript, and modern UI/UX — delivering responsive and
          interactive user experiences for e-learning and enterprise applications.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center">
          <a
            href="#projects"
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition"
          >
            View My Work
          </a>

          <a
            href="mailto:shubhamkeshri2020@gmail.com"
            className="border border-gray-400 text-gray-300 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
