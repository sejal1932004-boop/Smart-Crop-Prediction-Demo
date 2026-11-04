import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const Blog = () => {
  return (
    <section
      className="py-16 min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/farm.jpg')" }} 
    >
      <div className="max-w-6xl w-full mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-green-700">Our Blogs</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
              />

              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <p className="text-gray-600 mt-3">{blog.content.substring(0, 80)}...</p>

                
                <Link to={`/blog/${blog.id}`}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
