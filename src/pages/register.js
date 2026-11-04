import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Axios updated register function
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name, // Corrected field name for username
        email,
        password,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/images/plant.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-sm w-full z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create Your Account</h2>
        <form onSubmit={handleRegister}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-white">Full Name</label>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg p-2">
              <FontAwesomeIcon icon={faUser} className="text-white ml-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-white"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white">Email</label>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg p-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white ml-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-white"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white">Password</label>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg p-2">
              <FontAwesomeIcon icon={faLock} className="text-white ml-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-white"
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
