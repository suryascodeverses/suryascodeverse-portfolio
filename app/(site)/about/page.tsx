import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Your Name",
  description:
    "Learn more about my journey, skills, and passion for software development",
};

export default function AboutPage() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-400">
            Software Engineer & Problem Solver
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm [Your Name] - a passionate software engineer with a
                  love for creating elegant solutions to complex problems. My
                  journey in tech started [X years ago] when I wrote my first
                  line of code and haven't looked back since.
                </p>
                <p>
                  I specialize in full-stack development, with expertise in
                  modern web technologies and cloud infrastructure. My approach
                  combines technical excellence with creative problem-solving to
                  build applications that not only work flawlessly but also
                  delight users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience Highlights
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">
                    Senior Software Engineer
                  </h3>
                  <p className="text-purple-400 mb-2">
                    Company Name • 2022 - Present
                  </p>
                  <p className="text-gray-400">
                    Leading development of scalable web applications serving
                    100K+ users daily.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-400 mb-2">
                    Previous Company • 2020 - 2022
                  </p>
                  <p className="text-gray-400">
                    Built and maintained multiple client projects using React,
                    Node.js, and AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Education */}
          <div className="space-y-6">
            {/* Core Competencies */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full Stack Development",
                  "System Architecture",
                  "API Design",
                  "Database Optimization",
                  "Cloud Infrastructure",
                  "DevOps & CI/CD",
                  "Agile Methodologies",
                  "Technical Leadership",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-purple-400">
                    University Name • 2016 - 2020
                  </p>
                  <p className="text-gray-400 mt-2">
                    Focus: Software Engineering, Data Structures, Algorithms
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Certifications
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  AWS Certified Solutions Architect
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Google Cloud Professional
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  MongoDB Certified Developer
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
