import React, { useEffect, useState } from "react";

export default function Reports() {
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState({
    totalBookings: 0,
    confirmed: 0,
    pending: 0,
    canceled: 0,
    revenue: 0,
  });

  // Simulate fetching report data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Dummy data for now
      setReportData({
        totalBookings: 125,
        confirmed: 80,
        pending: 30,
        canceled: 15,
        revenue: 15000, // e.g., in dollars
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading reports...</p>
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
