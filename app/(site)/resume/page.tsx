"use client";

import { generateMetadata } from "@/lib/seo";

// export const metadata = generateMetadata({
//   title: "Resume",
//   description:
//     "Professional experience, education, and skills. Download my CV.",
//   keywords: ["Resume", "CV", "Experience", "Skills"],
// });

export default function ResumePage() {
  const handleDownload = () => {
    // TODO: Replace with actual PDF URL
    window.open("/resume.pdf", "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Full Stack Developer | Software Engineer
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center no-print">
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              📥 Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              🖨️ Print
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-purple-400"
              >
                your.email@example.com
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">San Francisco, CA</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Website</p>
              <a
                href="https://yourwebsite.com"
                className="text-white hover:text-purple-400"
              >
                yourwebsite.com
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional Summary
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications. Proficient in React, Node.js,
              and modern cloud technologies. Proven track record of delivering
              high-quality solutions that improve user experience and business
              metrics. Strong problem-solving skills and passion for clean,
              maintainable code.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="relative pl-8 pb-8 border-l-2 border-purple-500/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-purple-500"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Senior Software Engineer
                    </h3>
                    <p className="text-purple-400">Tech Company Inc.</p>
                  </div>
                  <span className="text-sm text-gray-400">2022 - Present</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Led development of microservices architecture serving
                    100K+ daily active users
                  </li>
                  <li>
                    • Improved application performance by 40% through
                    optimization and caching strategies
                  </li>
                  <li>
                    • Mentored 5 junior developers and conducted code reviews
                  </li>
                  <li>
                    • Implemented CI/CD pipeline reducing deployment time by 60%
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    AWS
                  </span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    Docker
                  </span>
                </div>
              </div>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-blue-500/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-blue-500"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Full Stack Developer
                    </h3>
                    <p className="text-blue-400">Startup Co.</p>
                  </div>
                  <span className="text-sm text-gray-400">2020 - 2022</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Built and maintained 10+ client projects from concept to
                    deployment
                  </li>
                  <li>
                    • Developed RESTful APIs and integrated third-party services
                  </li>
                  <li>
                    • Collaborated with designers to create responsive,
                    user-friendly interfaces
                  </li>
                  <li>
                    • Implemented automated testing achieving 85% code coverage
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    Vue.js
                  </span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-cyan-500"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Junior Developer
                    </h3>
                    <p className="text-cyan-400">Digital Agency</p>
                  </div>
                  <span className="text-sm text-gray-400">2018 - 2020</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Developed and maintained responsive websites for various
                    clients
                  </li>
                  <li>
                    • Fixed bugs and implemented new features based on client
                    feedback
                  </li>
                  <li>
                    • Participated in agile development process and daily
                    standups
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                    HTML/CSS
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                    PHP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-purple-400">University Name</p>
              </div>
              <span className="text-sm text-gray-400">2014 - 2018</span>
            </div>
            <p className="text-gray-300">
              GPA: 3.8/4.0 • Dean's List • Focus: Software Engineering, Data
              Structures, Algorithms
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
                  React
                </span>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
                  Next.js
                </span>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
                  Vue.js
                </span>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded">
                  Express
                </span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded">
                  Python
                </span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded">
                  Docker
                </span>
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded">
                  AWS
                </span>
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded">
                  CI/CD
                </span>
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-white font-semibold">
                  AWS Certified Solutions Architect
                </p>
                <p className="text-sm text-gray-400">
                  Amazon Web Services • 2023
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-white font-semibold">
                  MongoDB Certified Developer
                </p>
                <p className="text-sm text-gray-400">
                  MongoDB University • 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          section {
            padding: 20px !important;
          }
          .bg-white\\/5,
          .bg-gray-950 {
            background: white !important;
          }
          .text-white {
            color: black !important;
          }
          .text-gray-400,
          .text-gray-300 {
            color: #333 !important;
          }
          .border-white\\/10 {
            border-color: #ddd !important;
          }
        }
      `}</style>
    </section>
  );
}
