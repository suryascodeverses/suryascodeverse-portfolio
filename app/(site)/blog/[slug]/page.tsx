"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug } from "@/lib/services";
import { BlogPost } from "@/lib/types";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await getBlogPostBySlug(slug);

        // Redirect if post is not published (security)
        if (!data.published) {
          router.push("/blog");
          return;
        }

        setPost(data);
      } catch (err) {
        console.error("Failed to load blog post:", err);
        setError("Blog post not found.");
      } finally {
        setLoading(false);
      }
    }

    if (slug) loadPost();
  }, [slug, router]);

  if (loading) {
    return (
      <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-64 bg-white/10 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">{error}</p>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <time dateTime={post.publishedAt || post.createdAt}>
              {new Date(post.publishedAt || post.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
                     prose-headings:text-white prose-headings:font-bold
                     prose-p:text-gray-300 prose-p:leading-relaxed
                     prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                     prose-code:text-purple-400 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                     prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                     prose-img:rounded-lg
                     prose-strong:text-white
                     prose-ul:text-gray-300 prose-ol:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            ← Back to All Posts
          </Link>
        </footer>
      </div>
    </article>
  );
}
