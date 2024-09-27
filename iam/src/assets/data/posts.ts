export interface Post {
  id: number;
  title: string;
  date: string;
  description: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "2023-09-15",
    description: "An introduction to building user interfaces with React.",
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    date: "2023-08-30",
    description: "A comprehensive guide to using TypeScript for JavaScript developers.",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    date: "2023-07-10",
    description: "Learn how to build powerful RESTful APIs using Node.js and Express.",
  },
];

export default posts;