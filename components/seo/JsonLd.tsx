interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper functions for common schemas
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Name',
  url: 'https://yourwebsite.com',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Your Company',
  },
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/yourusername',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Your Name Portfolio',
  url: 'https://yourwebsite.com',
  description: 'Professional portfolio showcasing software development projects',
};

export function blogPostSchema(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
  };
}