import { Link } from "react-router-dom";
import posts from "../assets/data/posts";

function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-700">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;