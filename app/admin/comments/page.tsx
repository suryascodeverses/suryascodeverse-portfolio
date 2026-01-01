"use client";

import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  email: string;
  content: string;
  approved: boolean;
  createdAt: string;
  blogPostId: { _id: string; title: string };
}

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadComments();
  }, [filter]);

  async function loadComments() {
    try {
      const token = localStorage.getItem("token");
      const url = `http://localhost:5000/api/comments/admin${
        filter !== "all" ? `?status=${filter}` : ""
      }`;

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setComments(data.data || []);
    } catch (error) {
      console.error("Failed to load comments:", error);
    } finally {
      setLoading(false);
    }
  }

  async function approveComment(id: string) {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/comments/${id}/approve`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadComments();
    } catch (error) {
      console.error("Failed to approve comment:", error);
    }
  }

  async function deleteComment(id: string) {
    if (!confirm("Delete this comment?")) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/comments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadComments();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Comments
        </h1>
        <p className="text-gray-400">Moderate user comments</p>
      </div>

      {/* Filter */}
      <div className="flex gap-3 mb-8">
        {["all", "pending", "approved"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
              filter === status
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Comments List */}
      {comments.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No comments found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {comment.name[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">
                        {comment.name}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          comment.approved
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {comment.approved ? "Approved" : "Pending"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{comment.email}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-gray-300 mb-3 whitespace-pre-wrap">
                {comment.content}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span>On:</span>
                <span className="text-purple-400">
                  {comment.blogPostId?.title || "Unknown Post"}
                </span>
              </div>

              <div className="flex gap-2">
                {!comment.approved && (
                  <button
                    onClick={() => approveComment(comment._id)}
                    className="bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => deleteComment(comment._id)}
                  className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
