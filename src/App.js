import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Login from "./pages/login";
import Register from "./pages/register";
import CropRecommendation from "./components/CropRecommendation";
import CropResult from "./components/CropResult";
import Navbar from "./components/Navbar";

import { AuthProvider, AuthContext } from "./context/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};


const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />

            
            <Route path="/home" element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
            <Route path="/crop-recommendation" element={
              <RequireAuth>
                <CropRecommendation />
              </RequireAuth>
            } />
            <Route path="/crop-result" element={
              <RequireAuth>
                <CropResult />
              </RequireAuth>
            } />

           
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
