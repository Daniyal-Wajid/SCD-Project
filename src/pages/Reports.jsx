import React, { useEffect, useState } from "react";

export default function Reports() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reportData, setReportData] = useState({
    totalBookings: 0,
    confirmed: 0,
    pending: 0,
    canceled: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/reports"); // Your backend reports API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch reports");
        }
        const data = await response.json();

        // Assuming backend returns this shape:
        // { totalBookings, confirmed, pending, canceled, revenue }
        setReportData(data);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching reports.");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading reports...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Event Management Reports</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg text-center bg-green-50">
          <h2 className="text-xl font-semibold text-green-700">Total Bookings</h2>
          <p className="mt-2 text-3xl font-bold">{reportData.totalBookings}</p>
        </div>

        <div className="p-4 border rounded-lg text-center bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-700">Confirmed Bookings</h2>
          <p className="mt-2 text-3xl font-bold">{reportData.confirmed}</p>
        </div>

        <div className="p-4 border rounded-lg text-center bg-yellow-50">
          <h2 className="text-xl font-semibold text-yellow-700">Pending Bookings</h2>
          <p className="mt-2 text-3xl font-bold">{reportData.pending}</p>
        </div>

        <div className="p-4 border rounded-lg text-center bg-red-50">
          <h2 className="text-xl font-semibold text-red-700">Canceled Bookings</h2>
          <p className="mt-2 text-3xl font-bold">{reportData.canceled}</p>
        </div>

        <div className="p-4 border rounded-lg text-center bg-purple-50 col-span-full sm:col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold text-purple-700">Total Revenue</h2>
          <p className="mt-2 text-3xl font-bold">${reportData.revenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
