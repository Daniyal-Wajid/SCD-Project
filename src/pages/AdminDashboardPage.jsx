import React, { useState, useEffect } from "react";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionMsg, setActionMsg] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch stats and registrations together
  async function fetchData() {
    setLoading(true);
    setError("");
    try {
      const [statsRes, regRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/registrations"),
      ]);

      if (!statsRes.ok) throw new Error("Failed to fetch stats");
      if (!regRes.ok) throw new Error("Failed to fetch registrations");

      const statsData = await statsRes.json();
      const regData = await regRes.json();

      setStats(statsData);
      setRegistrations(regData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Approve registration
  async function handleApprove(id) {
    setError("");
    setActionMsg("");
    try {
      const res = await fetch(`/api/admin/registrations/${id}/approve`, {
        method: "PUT",
      });
      if (!res.ok) throw new Error("Approve failed");
      setRegistrations((prev) => prev.filter((r) => r.id !== id));
      setActionMsg("Registration approved!");
    } catch (err) {
      setError(err.message || "Approve action failed");
    }
  }

  // Reject registration
  async function handleReject(id) {
    setError("");
    setActionMsg("");
    try {
      const res = await fetch(`/api/admin/registrations/${id}/reject`, {
        method: "PUT",
      });
      if (!res.ok) throw new Error("Reject failed");
      setRegistrations((prev) => prev.filter((r) => r.id !== id));
      setActionMsg("Registration rejected!");
    } catch (err) {
      setError(err.message || "Reject action failed");
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl font-semibold">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Admin Dashboard</h1>

      {actionMsg && (
        <div className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded font-medium text-center">
          {actionMsg}
        </div>
      )}

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-10">
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Total Users</h2>
          <p className="text-3xl font-bold text-dark">{stats.totalUsers}</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Businesses</h2>
          <p className="text-3xl font-bold text-dark">{stats.totalBusinesses}</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Total Events</h2>
          <p className="text-3xl font-bold text-dark">{stats.totalEvents}</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Pending Approvals</h2>
          <p className="text-3xl font-bold text-dark">{stats.pendingApprovals}</p>
        </div>
      </section>

      {/* Recent Registrations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">Recent Registrations</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left py-3 px-6">Name</th>
                <th className="text-left py-3 px-6">Type</th>
                <th className="text-left py-3 px-6">Registration Date</th>
                <th className="text-center py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No recent registrations.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr
                    key={reg.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6">{reg.name}</td>
                    <td className="py-3 px-6">{reg.type}</td>
                    <td className="py-3 px-6">{reg.date}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        className="text-green-600 hover:text-green-700 font-semibold mr-4"
                        onClick={() => handleApprove(reg.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="text-red-600 hover:text-red-700 font-semibold"
                        onClick={() => handleReject(reg.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
