import data from "./blog-data.json";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
};

export const blogPosts = data as BlogPost[];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}
