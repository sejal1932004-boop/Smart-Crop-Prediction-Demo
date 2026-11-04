import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CropResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { predictedCrop } = location.state || { predictedCrop: "No crop predicted." };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/agroveer.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg text-center w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="text-4xl font-bold text-green-800 mb-6">🌾 Crop Prediction 🌿</h1>
        <p className="text-xl text-black mb-6">
          Recommended Crop: <span className="font-bold text-green-700">{predictedCrop}</span>
        </p>
        <button
          onClick={() => navigate("/crop-recommendation")}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-lg font-medium transition duration-300"
        >
          Get Another Recommendation
        </button>
      </div>
    </div>
  );
};

export default CropResult;
