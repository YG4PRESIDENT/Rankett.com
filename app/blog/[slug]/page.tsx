import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import BlogPostContent from "@/components/blog/BlogPostContent";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}