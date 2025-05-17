import React from "react";

export default function BusinessDashboardPage() {
  // Mock data for now (you'll fetch real data later)
  const upcomingEvents = [
    { id: 1, name: "Wedding Reception", date: "2025-06-15", client: "Alice Johnson" },
    { id: 2, name: "Corporate Seminar", date: "2025-06-20", client: "TechCorp Ltd." },
    { id: 3, name: "Birthday Bash", date: "2025-06-25", client: "John Doe" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Business Dashboard</h1>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Total Bookings</h2>
          <p className="text-3xl font-bold text-dark">42</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Upcoming Events</h2>
          <p className="text-3xl font-bold text-dark">{upcomingEvents.length}</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2 text-secondary">Pending Payments</h2>
          <p className="text-3xl font-bold text-dark">3</p>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">Upcoming Events</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left py-3 px-6">Event Name</th>
                <th className="text-left py-3 px-6">Date</th>
                <th className="text-left py-3 px-6">Client</th>
                <th className="text-center py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map((event) => (
                <tr
                  key={event.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-6">{event.name}</td>
                  <td className="py-3 px-6">{event.date}</td>
                  <td className="py-3 px-6">{event.client}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="text-secondary hover:text-secondary/80 font-semibold"
                      // onClick={() => handleEdit(event.id)} // placeholder
                    >
                      Edit
                    </button>
                    <span className="mx-2">|</span>
                    <button
                      className="text-red-500 hover:text-red-600 font-semibold"
                      // onClick={() => handleDelete(event.id)} // placeholder
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {upcomingEvents.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No upcoming events found.
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
