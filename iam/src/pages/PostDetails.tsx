import { useParams } from "react-router-dom";
import posts from "../assets/data/posts";

function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p className="text-gray-700">{post.description}</p>
      <p className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vehicula justo sit amet mi interdum, a laoreet urna tristique.
      </p>
    </div>
  );
}

export default PostDetails;
