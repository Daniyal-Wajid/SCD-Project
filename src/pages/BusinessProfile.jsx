import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BusinessProfile() {
  const { user, updateUserProfile } = useContext(AuthContext); // assuming you have this in your context
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (user && user.businessProfile) {
      setFormData({
        businessName: user.businessProfile.businessName || "",
        ownerName: user.businessProfile.ownerName || "",
        email: user.email || "",
        phone: user.businessProfile.phone || "",
        address: user.businessProfile.address || "",
        description: user.businessProfile.description || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call update function from context or API
    updateUserProfile(formData)
      .then(() => {
        setSuccessMsg("Profile updated successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      })
      .catch(() => {
        setSuccessMsg("Failed to update profile.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Business Profile</h1>

      {successMsg && (
        <div className="mb-4 p-4 text-white bg-green-500 rounded-md">{successMsg}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block mb-2 font-semibold text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="ownerName" className="block mb-2 font-semibold text-gray-700">
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            disabled
          />
          <p className="text-sm text-gray-500 mt-1">Email can't be changed here.</p>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="address" className="block mb-2 font-semibold text-gray-700">
            Business Address
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">
            Business Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Describe your services, specialties, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
