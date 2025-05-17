import React, { useState, useEffect } from "react";

export default function ManageServices() {
  // Mock services data for now
  const [services, setServices] = useState([
    { id: 1, name: "Grand Hall", type: "Hall", price: 1000 },
    { id: 2, name: "Floral Decoration", type: "Decor", price: 500 },
    { id: 3, name: "Gourmet Catering", type: "Catering", price: 1500 },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    type: "Hall",
    price: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const serviceTypes = ["Hall", "Decor", "Catering", "Food"];

  const resetForm = () => {
    setFormData({ id: null, name: "", type: "Hall", price: "" });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (isEditing) {
      // Update existing service
      setServices((prev) =>
        prev.map((svc) =>
          svc.id === formData.id
            ? { ...svc, name: formData.name, type: formData.type, price: Number(formData.price) }
            : svc
        )
      );
    } else {
      // Add new service
      const newService = {
        id: Date.now(),
        name: formData.name,
        type: formData.type,
        price: Number(formData.price),
      };
      setServices((prev) => [...prev, newService]);
    }
    resetForm();
  };

  const handleEdit = (service) => {
    setFormData({
      id: service.id,
      name: service.name,
      type: service.type,
      price: service.price,
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((svc) => svc.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary">Manage Your Services</h2>

      <form onSubmit={handleAddService} className="mb-8 space-y-4">
        <div>
          <label className="block mb-1 font-medium text-dark" htmlFor="name">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter service name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-dark" htmlFor="type">
            Service Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {serviceTypes.map((stype) => (
              <option key={stype} value={stype}>
                {stype}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-dark" htmlFor="price">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary-dark transition"
          >
            {isEditing ? "Update Service" : "Add Service"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-dark font-semibold px-6 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-primary">Your Services</h3>
        {services.length === 0 ? (
          <p className="text-gray-500">You have no services added yet.</p>
        ) : (
          <ul className="space-y-4">
            {services.map((svc) => (
              <li
                key={svc.id}
                className="flex justify-between items-center bg-secondary/10 rounded-md p-4 shadow-sm"
              >
                <div>
                  <p className="font-semibold text-dark">{svc.name}</p>
                  <p className="text-sm text-gray-600">{svc.type}</p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="font-semibold text-dark">${svc.price}</p>
                  <button
                    onClick={() => handleEdit(svc)}
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(svc.id)}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
