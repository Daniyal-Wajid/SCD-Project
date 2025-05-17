import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
            Plan. Book. Celebrate. <br /> Effortlessly.
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Discover the best venues, catering, and decor from trusted businesses. 
            Whether you’re hosting an intimate gathering or a grand celebration, we’ve got you covered.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/register"
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition"
            >
              Get Started
            </Link>
            <Link
              to="/browse-business"
              className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition"
            >
              Explore Businesses
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Event celebration"
            className="rounded-lg shadow-lg mx-auto max-w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="mb-4 text-primary text-5xl">🎉</div>
            <h3 className="text-xl font-semibold mb-2">Diverse Services</h3>
            <p className="text-gray-600">
              Choose from halls, catering, decor, and more — all verified and ready to serve your event.
            </p>
          </div>
          <div>
            <div className="mb-4 text-primary text-5xl">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Fast and secure booking with real-time availability and instant confirmations.
            </p>
          </div>
          <div>
            <div className="mb-4 text-primary text-5xl">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Community</h3>
            <p className="text-gray-600">
              Connect directly with businesses and users who value quality and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your unforgettable event?</h2>
        <Link
          to="/register"
          className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary-dark transition"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
}
