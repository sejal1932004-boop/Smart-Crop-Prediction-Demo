import React from "react";
import { useNavigate } from "react-router-dom";  

export default function AboutUs() { 
  const navigate = useNavigate();  

  return (
    <section className="bg-gradient-to-r from-green-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        
        <div className="md:w-1/2">
          <img 
            src="https://image.freepik.com/free-photo/woman-white-dress-straw-hat-walking-wheat-field-sunset-female-person-summer-meadow-back-view_266732-3207.jpg" 
            alt="Farmer in field" 
            className="rounded-2xl shadow-lg w-full transform hover:scale-105 transition duration-500"
          />
        </div>
        
        
        <div className="md:w-1/2 text-gray-800 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 leading-relaxed">
            Improving Agriculture, Improving Lives, Cultivating Crops to Help Farmers Increase Profit.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We use state-of-the-art <strong>Machine Learning</strong> technologies to guide you through the
            entire farming process. Make informed decisions, understand the demographics 
            of your area, identify factors that affect your crop, and keep them 
            healthy for a <span className="text-green-600 font-semibold">successful yield</span>.
          </p>
          
          
          <button 
            onClick={() => navigate("/blog")}  
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
