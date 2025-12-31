import { Metadata } from 'next';

const siteConfig = {
  name: 'Your Name',
  title: 'Your Name - Full Stack Developer',
  description: 'Professional portfolio showcasing innovative software solutions, full-stack development projects, and technical blog posts.',
  url: 'https://yourwebsite.com',
  ogImage: 'https://yourwebsite.com/og-image.jpg',
  keywords: ['Full Stack Developer', 'Software Engineer', 'Web Development', 'React', 'Node.js', 'Portfolio'],
  author: 'Your Name',
  twitter: '@yourusername',
};

export function generateMetadata(config?: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const title = config?.title ? `${config.title} | ${siteConfig.name}` : siteConfig.title;
  const description = config?.description || siteConfig.description;
  const image = config?.image || siteConfig.ogImage;
  const keywords = config?.keywords || siteConfig.keywords;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: {
      index: !config?.noIndex,
      follow: !config?.noIndex,
      googleBot: {
        index: !config?.noIndex,
        follow: !config?.noIndex,
      },
    },
  };
}

export { siteConfig };