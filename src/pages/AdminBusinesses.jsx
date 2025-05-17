import React, { useState, useEffect } from "react";

export default function AdminBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBusinesses();
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  async function fetchBusinesses() {
    setLoading(true);
    try {
      const res = await fetch("/api/businesses");
      if (!res.ok) throw new Error("Failed to fetch businesses");
      const data = await res.json();
      setBusinesses(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, newStatus) {
    try {
      const res = await fetch(`/api/businesses/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      setBusinesses((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
      setNotification(`Business ${newStatus}!`);
    } catch (err) {
      setError(err.message || "Status update failed");
    }
  }

  async function removeBusiness(id) {
    if (!window.confirm("Are you sure you want to remove this business?")) return;
    try {
      const res = await fetch(`/api/businesses/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to remove business");
      setBusinesses((prev) => prev.filter((b) => b.id !== id));
      setNotification("Business removed!");
    } catch (err) {
      setError(err.message || "Removal failed");
    }
  }

  const statusBadge = (status) => {
    const base = "inline-block px-2 py-1 rounded text-xs font-semibold capitalize";
    switch (status) {
      case "approved":
        return <span className={`${base} bg-green-100 text-green-800`}>Approved</span>;
      case "pending":
        return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
      case "rejected":
        return <span className={`${base} bg-red-100 text-red-800`}>Rejected</span>;
      default:
        return <span className={`${base} bg-gray-100 text-gray-800`}>{status}</span>;
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-indigo-700 mb-6">Manage Business Owners</h1>

      {notification && (
        <div className="mb-4 px-4 py-2 bg-indigo-100 text-indigo-800 rounded text-center font-medium">
          {notification}
        </div>
      )}

      {error && (
        <div className="mb-4 px-4 py-2 bg-red-100 text-red-700 rounded text-center font-medium">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading businesses...</p>
      ) : (
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
                  <td className="border border-gray-300 px-4 py-2">{statusBadge(b.status)}</td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    {b.status === "pending" && (
                      <>
                        <button
                          key="approve"
                          onClick={() => updateStatus(b.id, "approved")}
                          aria-label={`Approve ${b.name}`}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        >
                          Approve
                        </button>
                        <button
                          key="reject"
                          onClick={() => updateStatus(b.id, "rejected")}
                          aria-label={`Reject ${b.name}`}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => removeBusiness(b.id)}
                      aria-label={`Remove ${b.name}`}
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
      )}
    </section>
  );
}
