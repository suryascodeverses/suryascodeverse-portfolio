"use client";

import { useState, useEffect } from "react";

interface Comment {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
  parentId?: string;
  approved: boolean;
}

interface CommentsProps {
  blogPostId: string;
}

export default function Comments({ blogPostId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [replyTo, setReplyTo] = useState<string | null>(null);

  useEffect(() => {
    loadComments();
  }, [blogPostId]);

  async function loadComments() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/comments/post/${blogPostId}`
      );
      const data = await response.json();
      setComments(data.data || []);
    } catch (error) {
      console.error("Failed to load comments:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/comments/post/${blogPostId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, parentId: replyTo }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", content: "" });
        setSuccess(true);
        setReplyTo(null);
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setSubmitting(false);
    }
  }

  const topLevelComments = comments.filter((c) => !c.parentId);
  const getReplies = (parentId: string) =>
    comments.filter((c) => c.parentId === parentId);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-white mb-6">
        Comments ({topLevelComments.length})
      </h3>

      {/* Comment Form */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
        <h4 className="text-xl font-semibold text-white mb-4">
          {replyTo ? "Reply to Comment" : "Leave a Comment"}
        </h4>

        {replyTo && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm text-gray-400">Replying to a comment</span>
            <button
              onClick={() => setReplyTo(null)}
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Cancel
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <textarea
            placeholder="Your comment..."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
          />

          {success && (
            <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm">
              ✓ Comment submitted for approval. It will appear after review.
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Post Comment"}
          </button>
        </form>
      </div>

      {/* Comments List */}
      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-400">Loading comments...</p>
        </div>
      ) : topLevelComments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {topLevelComments.map((comment) => (
            <div key={comment._id}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {comment.name[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-white">
                        {comment.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 whitespace-pre-wrap">
                      {comment.content}
                    </p>
                    <button
                      onClick={() => setReplyTo(comment._id)}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Replies */}
              {getReplies(comment._id).length > 0 && (
                <div className="ml-12 mt-4 space-y-4">
                  {getReplies(comment._id).map((reply) => (
                    <div
                      key={reply._id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                          {reply.name[0].toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white text-sm">
                              {reply.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(reply.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm whitespace-pre-wrap">
                            {reply.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
