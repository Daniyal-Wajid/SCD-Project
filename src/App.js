import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterBusiness from "./pages/RegisterBusiness";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import TermsPrivacy from "./pages/TermsPrivacy";
import NotFound from "./pages/NotFound";

import UserDashboardPage from "./pages/UserDashboardPage";
import BusinessDashboardPage from "./pages/BusinessDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function AppRoutes() {
  const { userType, isAuthenticated } = useContext(AuthContext);

  return (
    <MainLayout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<TermsPrivacy />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {userType === "user" ? (
                <UserDashboardPage />
              ) : userType === "business" ? (
                <BusinessDashboardPage />
              ) : userType === "admin" ? (
                <AdminDashboardPage />
              ) : (
                <Navigate to="/login" />
              )}
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
