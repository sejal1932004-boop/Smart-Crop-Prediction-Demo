import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs"; // ✅ Blog Data Import करें

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog Not Found</h2>;
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg shadow-lg" />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">{blog.title}</h1>
        <p className="text-gray-500">{blog.date}</p>
        <p className="mt-4 text-gray-700">{blog.content}</p>
      </div>
    </section>
  );
};

export default BlogDetail;
