import React, { useState, useEffect } from "react";
import axios from "../api"; // custom axios instance

export default function BusinessProfile() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch profile on load
  useEffect(() => {
    axios
      .get("/business/profile")
      .then((res) => {
        const profile = res.data;
        setFormData({
          businessName: profile.businessName || "",
          ownerName: profile.ownerName || "",
          email: profile.email || "",
          phone: profile.phone || "",
          address: profile.address || "",
          description: profile.description || "",
        });
      })
      .catch(() => setErrorMsg("Failed to fetch profile"));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/business/profile", formData)
      .then(() => {
        setSuccessMsg("Profile updated successfully!");
        setErrorMsg("");
        setTimeout(() => setSuccessMsg(""), 3000);
      })
      .catch(() => {
        setSuccessMsg("");
        setErrorMsg("Failed to update profile.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Business Profile</h1>

      {successMsg && (
        <div className="mb-4 p-4 text-white bg-green-500 rounded-md">{successMsg}</div>
      )}
      {errorMsg && (
        <div className="mb-4 p-4 text-white bg-red-500 rounded-md">{errorMsg}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... your existing form fields ... */}
      </form>
    </div>
  );
}
