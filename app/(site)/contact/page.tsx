"use client";

import { useState } from "react";
import { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // TODO: Replace with your actual contact form endpoint
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("success");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen py-20 px-4 section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300">
                    San Francisco, CA
                    <br />
                    Available for remote work
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-300">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Connect With Me
              </h2>

              <div className="space-y-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                    <span className="text-xl">🔗</span>
                  </div>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                    <span className="text-xl">💼</span>
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                    <span className="text-xl">🐦</span>
                  </div>
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Current Availability
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">
                  Available for freelance
                </span>
              </div>
              <p className="text-gray-300">
                I'm currently accepting new projects and collaborations. Let's
                build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
