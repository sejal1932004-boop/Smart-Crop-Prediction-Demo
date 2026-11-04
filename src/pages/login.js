import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/home"); // ✅ Redirect after successful login
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative" 
      style={{ backgroundImage: "url('/images/plant.jpg')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-sm w-full z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back!</h2>
        
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-white font-semibold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
