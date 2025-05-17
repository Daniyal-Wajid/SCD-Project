import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookEvent() {
  const [businessServices, setBusinessServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    selectedServices: {
      hall: "",
      catering: "",
      decor: "",
      food: "",
    },
    notes: "",
  });

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/api/services");
        setBusinessServices(res.data.services); // Expecting [{ id, name, type }]
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["hall", "catering", "decor", "food"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: {
          ...prev.selectedServices,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Submit booking to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/bookings", formData);
      alert("Booking successful!");
      console.log(res.data);
      setFormData({
        eventName: "",
        eventDate: "",
        selectedServices: {
          hall: "",
          catering: "",
          decor: "",
          food: "",
        },
        notes: "",
      });
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Failed to submit booking.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-primary mb-6">Book Your Event</h1>
      {loading ? (
        <p>Loading services...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label htmlFor="eventName" className="block mb-1 font-medium">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              placeholder="e.g. John's Wedding"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block mb-1 font-medium">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block mb-2 font-medium">Select Services</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["hall", "catering", "decor", "food"].map((serviceType) => (
                <div key={serviceType}>
                  <label className="block mb-1 capitalize font-semibold">{serviceType}</label>
                  <select
                    name={serviceType}
                    value={formData.selectedServices[serviceType]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">None</option>
                    {businessServices
                      .filter((s) => s.type.toLowerCase() === serviceType)
                      .map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="notes" className="block mb-1 font-medium">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Anything special you want to mention?"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            Book Event
          </button>
        </form>
      )}
    </div>
  );
}
