import React from "react";

export default function AdminDashboardPage() {
  // Mock data for now (you’ll replace with real API data later)
  const stats = {
    totalUsers: 120,
    totalBusinesses: 35,
    totalEvents: 200,
    pendingApprovals: 5,
  };

  const recentRegistrations = [
    { id: 1, name: "Alice Johnson", type: "User", date: "2025-05-01" },
    { id: 2, name: "EventPro Caterers", type: "Business", date: "2025-05-02" },
    { id: 3, name: "John Doe", type: "User", date: "2025-05-03" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Admin Dashboard</h1>

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
              {recentRegistrations.map((reg) => (
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
                      // onClick={() => handleApprove(reg.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="text-red-600 hover:text-red-700 font-semibold"
                      // onClick={() => handleReject(reg.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
              {recentRegistrations.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No recent registrations.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
