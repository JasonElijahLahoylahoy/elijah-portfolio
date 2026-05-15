export default function Portfolio() {
  const projects = [
  {
    title: 'Queue Monitoring System',
    description:
      'A mobile-based queue management application developed using React Native and Firebase to improve customer flow tracking, scheduling, and real-time queue updates.',
  },
  {
    title: 'MedCabinet IoT System',
    description:
      'An IoT-powered medicine cabinet and inventory monitoring system designed to automate medicine tracking, stock monitoring, expiration alerts, and real-time inventory management.',
  },
  {
    title: 'Kaon Ta: Android Food Application',
    description:
      'A mobile food ordering application designed to provide users with a convenient and user-friendly platform for browsing menus, placing orders, and managing food transactions digitally.',
  },
];

  const skills = [
    'React Native',
    'PHP',
    'Bootstrap',
    'Firebase',
    'JavaScript',
    'Cybersecurity',
    'Computer Networking',
    'UI/UX Design',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden py-28 px-6 text-center border-b border-gray-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="relative z-10">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full border-4 border-white overflow-hidden shadow-2xl hover:scale-105 transition duration-500">
            <img
              src="/Lahoylahoy_profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Jason Elijah Lahoylahoy
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            BS Information Technology Student specializing in mobile
            development, cybersecurity, networking, and user-focused digital
            solutions.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/JasonElijahLahoylahoy"
              target="_blank"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jasonelijahlahoylahoy"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* ABOUT */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-white pl-4">
            About Me
          </h2>

          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <p className="text-lg leading-relaxed text-gray-300">
              I am an Information Technology student passionate about software
              engineering, cybersecurity, networking, and UI/UX design. I enjoy
              developing modern applications, solving technical problems, and
              building digital solutions that improve user productivity and
              experience.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-white pl-4">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-gray-800 rounded-2xl p-5 text-center font-medium hover:bg-white hover:text-black hover:scale-105 transition duration-300 cursor-pointer shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-white pl-4">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:border-white transition duration-500"
              >
                <div className="mb-5 w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl font-bold group-hover:rotate-6 transition duration-300">
                  💻
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <button className="mt-6 px-5 py-2 rounded-full border border-gray-600 hover:bg-white hover:text-black transition duration-300">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-white pl-4">
            Professional Experience
          </h2>

          <div className="bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2">
              IT Support Intern — Concentrix
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Assisted with troubleshooting hardware and software concerns,
              technical support operations, and user assistance in a professional
              workplace environment. Strengthened communication, analytical, and
              IT operational skills through hands-on experience.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-white pl-4">
            Contact Information
          </h2>

          <div className="bg-white/5 border border-gray-800 rounded-3xl p-8 shadow-xl space-y-5">
            <p className="text-lg">
              <span className="font-semibold text-white">Email:</span>{' '}
              <span className="text-gray-400">
                elijahlahoylahoy@gmail.com
              </span>
            </p>

            <p className="text-lg">
              <span className="font-semibold text-white">GitHub:</span>{' '}
              <a
                href="https://github.com/JasonElijahLahoylahoy"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                github.com/JasonElijahLahoylahoy
              </a>
            </p>

            <p className="text-lg">
              <span className="font-semibold text-white">LinkedIn:</span>{' '}
              <a
                href="https://linkedin.com/in/jasonelijahlahoylahoy"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                linkedin.com/in/jasonelijahlahoylahoy
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 text-center py-8 text-gray-500">
        <p>© 2026 Lahoylahoy, Jason Elijah P. All Rights Reserved.</p>
      </footer>
    </div>
  );
}