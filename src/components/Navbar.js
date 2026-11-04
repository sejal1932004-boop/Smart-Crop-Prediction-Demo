import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/" className="text-3xl font-bold text-green-700">
          Agroveer 🌿
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink to="home" smooth={true} duration={500} className="text-gray-900 hover:text-green-500 font-medium cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="text-gray-900 hover:text-green-500 font-medium cursor-pointer">
            About Us
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="text-gray-900 hover:text-green-500 font-medium cursor-pointer">
            Our Services
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-900 hover:text-green-500 font-medium cursor-pointer">
            Contact
          </ScrollLink>
          <RouterLink to="/blog" className="text-gray-900 hover:text-green-500 font-medium">
            Blog
          </RouterLink>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {!user ? (
            <>
              <RouterLink
                to="/login"
                className="px-5 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"
              >
                Login
              </RouterLink>
              <RouterLink
                to="/register"
                className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all"
              >
                Register
              </RouterLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-red-500 text-red-600 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={26} className="text-green-700" /> : <FaBars size={26} className="text-green-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md py-6 space-y-4 text-center shadow-md">
          <ScrollLink to="home" smooth={true} duration={500} className="block text-gray-900 hover:text-green-500 font-medium cursor-pointer" onClick={() => setMenuOpen(false)}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="block text-gray-900 hover:text-green-500 font-medium cursor-pointer" onClick={() => setMenuOpen(false)}>About Us</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="block text-gray-900 hover:text-green-500 font-medium cursor-pointer" onClick={() => setMenuOpen(false)}>Our Services</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block text-gray-900 hover:text-green-500 font-medium cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</ScrollLink>
          <RouterLink to="/blog" className="block text-gray-900 hover:text-green-500 font-medium" onClick={() => setMenuOpen(false)}>Blog</RouterLink>

          {!user ? (
            <>
              <RouterLink to="/login" className="block border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all" onClick={() => setMenuOpen(false)}>Login</RouterLink>
              <RouterLink to="/register" className="block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all" onClick={() => setMenuOpen(false)}>Register</RouterLink>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block border border-red-500 text-red-600 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
