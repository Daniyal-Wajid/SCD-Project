import React, { useEffect, useState } from "react";

export default function UserDashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/bookings"); // your backend endpoint
        if (!response.ok) {
          throw new Error("Failed to load bookings.");
        }
        const data = await response.json();
        setBookings(data); // assuming backend returns an array of bookings
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-500">Loading your bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light p-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Your Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-dark mb-4">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-secondary">No bookings yet. Go make some plans!</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white p-5 rounded-lg shadow-md border border-secondary"
              >
                <h3 className="text-xl font-semibold text-primary">{booking.event}</h3>
                <p className="text-dark">Date: {booking.date}</p>
                <p className="text-dark">Services: {booking.services.join(", ")}</p>
                <p
                  className={`mt-2 font-semibold ${
                    booking.status === "Confirmed"
                      ? "text-green-600"
                      : booking.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Status: {booking.status}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-dark mb-4">Quick Actions</h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition duration-300">
            Book an Event
          </button>
          <button className="flex-1 bg-secondary text-dark py-3 rounded-md hover:bg-secondary/80 transition duration-300">
            Edit Profile
          </button>
        </div>
      </section>
    </div>
  );
}
