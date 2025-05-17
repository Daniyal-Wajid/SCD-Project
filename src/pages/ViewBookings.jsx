import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ViewBookings() {
  const { userType } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy bookings for now - replace with real API call
  useEffect(() => {
    setLoading(true);

    // Example dummy data
    const dummyBookings = [
      {
        id: "B001",
        eventName: "Wedding Ceremony",
        date: "2025-06-01",
        status: "Confirmed",
        customerName: "Alice Johnson",
        services: ["Hall", "Catering"],
      },
      {
        id: "B002",
        eventName: "Corporate Meetup",
        date: "2025-06-15",
        status: "Pending",
        customerName: "Bob Smith",
        services: ["Decor"],
      },
    ];

    // Simulate API delay
    setTimeout(() => {
      setBookings(dummyBookings);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading bookings...</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center mt-16 text-gray-600">
        <p>No bookings found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Your Bookings</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border px-4 py-2 text-left">Booking ID</th>
              <th className="border px-4 py-2 text-left">Event Name</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Customer</th>
              <th className="border px-4 py-2 text-left">Services</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(({ id, eventName, date, status, customerName, services }) => (
              <tr
                key={id}
                className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <td className="border px-4 py-2">{id}</td>
                <td className="border px-4 py-2">{eventName}</td>
                <td className="border px-4 py-2">{date}</td>
                <td
                  className={`border px-4 py-2 font-semibold ${
                    status === "Confirmed"
                      ? "text-green-600"
                      : status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </td>
                <td className="border px-4 py-2">{customerName}</td>
                <td className="border px-4 py-2">{services.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
