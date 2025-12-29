"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProjects, getSkills, getBlogPosts } from "@/lib/services";
import { Project, Skill, BlogPost } from "@/lib/types";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    blogPosts: 0,
    publishedPosts: 0,
  });
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [projects, skills, blogPosts] = await Promise.all([
          getProjects(),
          getSkills(),
          getBlogPosts(),
        ]);

        setStats({
          projects: projects.length,
          skills: skills.length,
          blogPosts: blogPosts.length,
          publishedPosts: blogPosts.filter((p) => p.published).length,
        });

        setRecentProjects(projects.slice(0, 3));
        setRecentPosts(blogPosts.slice(0, 3));
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      label: "Total Projects",
      value: stats.projects,
      icon: "💼",
      color: "from-purple-600 to-blue-600",
      link: "/admin/projects",
    },
    {
      label: "Skills",
      value: stats.skills,
      icon: "⚡",
      color: "from-blue-600 to-cyan-600",
      link: "/admin/skills",
    },
    {
      label: "Blog Posts",
      value: stats.blogPosts,
      icon: "📝",
      color: "from-cyan-600 to-teal-600",
      link: "/admin/blog",
    },
    {
      label: "Published Posts",
      value: stats.publishedPosts,
      icon: "✅",
      color: "from-teal-600 to-green-600",
      link: "/admin/blog",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-gray-400">
          Welcome back! Here's an overview of your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link key={stat.label} href={stat.link}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                >
                  {stat.icon}
                </div>
                <span className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  →
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-4 hover:from-purple-600/30 hover:to-blue-600/30 transition-all group"
          >
            <span className="text-2xl">➕</span>
            <div>
              <p className="text-white font-semibold">Add Project</p>
              <p className="text-sm text-gray-400">Create new portfolio item</p>
            </div>
          </Link>

          <Link
            href="/admin/blog"
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all group"
          >
            <span className="text-2xl">✍️</span>
            <div>
              <p className="text-white font-semibold">Write Post</p>
              <p className="text-sm text-gray-400">Create new blog article</p>
            </div>
          </Link>

          <Link
            href="/admin/skills"
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 rounded-xl p-4 hover:from-cyan-600/30 hover:to-teal-600/30 transition-all group"
          >
            <span className="text-2xl">⚡</span>
            <div>
              <p className="text-white font-semibold">Add Skill</p>
              <p className="text-sm text-gray-400">Add new technology</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
            <Link
              href="/admin/projects"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <Link
                key={project._id}
                href={`/admin/projects`}
                className="block bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1 truncate">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {project.featured && (
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Blog Posts</h2>
            <Link
              href="/admin/blog"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post._id}
                href={`/admin/blog`}
                className="block bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-white font-semibold mb-1 truncate">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      post.published
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
