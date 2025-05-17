import React, { useState } from "react";

export default function AdminBusiness() {
  // Dummy business data - replace with API fetch later
  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "Glamour Hall",
      owner: "Sophie Lee",
      email: "sophie@example.com",
      status: "pending", // pending, approved, rejected
    },
    {
      id: 2,
      name: "Delicious Catering",
      owner: "Mark Johnson",
      email: "mark@example.com",
      status: "approved",
    },
    {
      id: 3,
      name: "Elegant Decor",
      owner: "Lisa Brown",
      email: "lisa@example.com",
      status: "pending",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setBusinesses(
      businesses.map((b) =>
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
    alert(`Business ${newStatus}!`);
  };

  const removeBusiness = (id) => {
    if (window.confirm("Are you sure you want to remove this business?")) {
      setBusinesses(businesses.filter((b) => b.id !== id));
      alert("Business removed!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-primary mb-6">
        Manage Business Owners
      </h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Business Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Owner</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {businesses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No businesses found.
              </td>
            </tr>
          ) : (
            businesses.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{b.name}</td>
                <td className="border border-gray-300 px-4 py-2">{b.owner}</td>
                <td className="border border-gray-300 px-4 py-2">{b.email}</td>
                <td className="border border-gray-300 px-4 py-2 capitalize">{b.status}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  {b.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(b.id, "approved")}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, "rejected")}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => removeBusiness(b.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
