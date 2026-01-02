'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dummyAnalyticsData } from "../../../lib/dummyData";

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  // async function loadStats() {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await fetch('http://localhost:5000/api/analytics/dashboard', {
  //       headers: { 'Authorization': `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     setStats(data.data);
  //   } catch (error) {
  //     console.error('Failed to load analytics:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function loadStats() {
    try {
      // Use dummy data instead of API
      setStats(dummyAnalyticsData);
    } catch (error) {
      console.error("Failed to load analytics:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const chartData = stats.viewsByDay.map((item: any) => ({
    date: new Date(item._id).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    views: item.count,
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Analytics
        </h1>
        <p className="text-gray-400">Track your portfolio performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Total Views</div>
          <div className="text-3xl font-bold text-white">
            {stats.totalViews}
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Last 30 Days</div>
          <div className="text-3xl font-bold text-white">
            {stats.recentViews}
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Blog Views</div>
          <div className="text-3xl font-bold text-white">{stats.blogViews}</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Project Views</div>
          <div className="text-3xl font-bold text-white">
            {stats.projectViews}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Views Over Time */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Views Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="date" stroke="#a0a0a0" />
              <YAxis stroke="#a0a0a0" />
              <Tooltip
                contentStyle={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#a855f7"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Blog Posts */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Top Blog Posts</h2>
          <div className="space-y-4">
            {stats.topBlogPosts.map((post: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white truncate">
                    {post.title || "Untitled"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                      style={{
                        width: `${
                          (post.count / stats.topBlogPosts[0].count) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-400 text-sm w-12 text-right">
                    {post.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Projects */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Top Projects</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.topProjects}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="title" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip
              contentStyle={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}