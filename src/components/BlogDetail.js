import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-600 text-2xl mt-10">Blog Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-cover bg-center py-16" 
         style={{ backgroundImage: "url('/images/farm.jpg')" }}>  
      
      
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        
        <h2 className="text-4xl font-bold text-green-700">{blog.title}</h2>

        <div className="text-gray-500 text-sm flex justify-between mt-2">
          <span>📅 {blog.date}</span>
          <span>✍️ {blog.author}</span>
          <span>🕒 {blog.readingTime}</span>
          <span>👀 {blog.views} Views</span>
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed">{blog.fullContent}</p>

        <div className="mt-4">
          <strong className="text-green-700">Keywords:</strong> 
          {blog.keywords.map((keyword, index) => (
            <span key={index} className="text-gray-600 ml-2">#{keyword}</span>
          ))}
        </div>

        {blog.faqs && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-700">FAQs</h3>
            {blog.faqs.map((faq, index) => (
              <div key={index} className="mt-2">
                <strong className="text-gray-800">{faq.question}</strong>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {blog.references && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-700">References</h3>
            <ul className="list-disc list-inside text-blue-600">
              {blog.references.map((ref, index) => (
                <li key={index}>
                  <a href={ref} target="_blank" rel="noopener noreferrer">{ref}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {blog.relatedBlogs.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-700">Related Blogs</h3>
            <ul className="list-disc list-inside">
              {blog.relatedBlogs.map((relatedId) => {
                const relatedBlog = blogs.find((b) => b.id === relatedId);
                return relatedBlog ? (
                  <li key={relatedId}>
                    <Link to={`/blog/${relatedId}`} className="text-blue-600 hover:underline">
                      {relatedBlog.title}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
