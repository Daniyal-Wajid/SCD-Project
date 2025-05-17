import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboardPage from "./pages/UserDashboardPage";
import BusinessDashboardPage from "./pages/BusinessDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function AppRoutes() {
  const { userType, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : userType === "user" ? (
              <UserDashboardPage />
            ) : userType === "business" ? (
              <BusinessDashboardPage />
            ) : userType === "admin" ? (
              <AdminDashboardPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
