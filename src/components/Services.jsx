import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook

const Services = () => {
  const navigate = useNavigate();  // Create a navigate function

  // Function to handle button click and navigate to the new page
  const handleGetStarted = () => {
    navigate("/crop-recommendation");  // Redirect to /crop-recommendation page
  };

  return (
    <section className="bg-green-100 w-full py-16 flex flex-col items-center justify-center">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Our Services
      </h2>

      <div className="max-w-6xl w-full px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://th.bing.com/th/id/OIP.V5L8e04UBF6hNx1YXDHAkgHaE6?rs=1&pid=ImgDetMain"
            alt="Crop Recommendation"
            className="rounded-2xl shadow-lg object-cover w-full h-96"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-green-600 text-3xl mr-3"
            />
            <h2 className="text-4xl font-bold text-gray-900">CROP RECOMMENDATION</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Get personalized crop recommendations based on real-time{" "}
            <span className="font-semibold text-black">weather</span>,{" "}
            <span className="font-semibold text-black">soil type</span>, and{" "}
            <span className="font-semibold text-black">region-specific data</span>. Our intelligent system analyzes multiple environmental factors to suggest crops that will thrive in your land, boost{" "}
            <span className="text-green-600 font-semibold">productivity</span>, and help you make informed farming decisions for a more{" "}
            <span className="text-green-600 font-semibold">profitable yield</span>.
          </p>

          <button
            onClick={handleGetStarted}  // Attach the click event handler
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
