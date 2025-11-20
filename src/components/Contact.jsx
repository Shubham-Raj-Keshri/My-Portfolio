export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white px-6 py-20 flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact <span className="text-orange-500">Me</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Have a project in mind, want to collaborate, or just want to say hello?
          Feel free to reach out! I usually reply within a few hours.
        </p>

        {/* Contact Card */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl max-w-xl mx-auto">
          <div className="space-y-6 text-left">

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:shubhamkeshri2020@gmail.com"
                className="text-lg text-orange-400 hover:text-orange-500"
              >
                shubhamkeshri2020@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <a
                href="tel:+918210057738"
                className="text-lg text-orange-400 hover:text-orange-500"
              >
                +91 8210057738
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-lg">Hyderabad, India</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">GitHub</p>
              <a
                href="https://github.com/Shubham-Raj-Keshri"
                target="_blank"
                className="text-lg text-orange-400 hover:text-orange-500"
              >
                Shubham Raj Keshri
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm">LinkedIn</p>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                className="text-lg text-orange-400 hover:text-orange-500"
              >
                linkedin.com/in/your-profile
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
