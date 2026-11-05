import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CropRecommendation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorous: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const limits = {
    nitrogen: [0, 140],
    phosphorous: [0, 145],
    potassium: [0, 205],
    temperature: [0, 43.6],
    humidity: [0, 99.9],
    ph: [0, 9.9],
    rainfall: [0, 298],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      value === "" ||
      (Number(value) >= limits[name][0] && Number(value) <= limits[name][1])
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in limits) {
      const [min, max] = limits[field];
      const value = Number(formData[field]);
      if (isNaN(value) || value < min || value > max) {
        alert(
          `${field.charAt(0).toUpperCase() + field.slice(1)} must be between ${min} and ${max}`
        );
        return;
      }
    }

    axios
      .post("https://smart-crop-node-backend.onrender.com/api/crop-recommend", formData)
      .then((response) => {
        const result = response.data.message;
        navigate("/crop-result", { state: { predictedCrop: result } });
      })
      .catch((error) => {
        console.error("Error:", error);
        navigate("/crop-result", {
          state: { predictedCrop: "Unable to get crop recommendation." },
        });
      });
  };

  const renderInput = (label, name, unit = "") => (
    <div className="w-full">
      <label htmlFor={name} className="block text-white text-lg font-medium">
        {label} {unit}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        min={limits[name][0]}
        max={limits[name][1]}
        step="any" // ✅ Allows decimal input
        className="mt-2 p-3 w-full border rounded-md focus:ring-2 focus:ring-green-500 text-black"
        placeholder={`Enter ${label}`}
      />
      <small className="text-white text-sm">
        Allowed range: {limits[name][0]} - {limits[name][1]} {unit}
      </small>
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/agroveer.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Crop Recommendation Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            {renderInput("Nitrogen", "nitrogen")}
            {renderInput("Phosphorous", "phosphorous")}
          </div>
          <div className="flex space-x-4">
            {renderInput("Potassium", "potassium")}
            {renderInput("Temperature", "temperature", "°C")}
          </div>
          <div className="flex space-x-4">
            {renderInput("Humidity", "humidity", "%")}
            {renderInput("pH", "ph")}
          </div>
          <div>{renderInput("Rainfall", "rainfall", "mm")}</div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-xl font-medium shadow-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CropRecommendation;
