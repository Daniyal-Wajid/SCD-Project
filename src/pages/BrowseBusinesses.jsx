import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BrowseBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get("/api/businesses"); // Replace with actual endpoint
        setBusinesses(res.data);
      } catch (err) {
        setError("Failed to load businesses. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  const filteredBusinesses = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8">Browse Businesses</h1>

      <div className="mb-6">
        <input
          type="search"
          placeholder="Search by business name or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading businesses...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredBusinesses.length === 0 ? (
        <p className="text-gray-500">No businesses found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredBusinesses.map((business) => (
            <div
              key={business._id || business.id}
              className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <img
                src={business.imageUrl}
                alt={business.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{business.name}</h2>
                <p className="text-sm text-gray-600 mb-2">Owner: {business.owner}</p>
                <p className="text-gray-700 mb-3">{business.description}</p>
                <p className="text-sm text-primary font-semibold">{business.city}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
