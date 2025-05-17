import React from "react";

export default function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600">EventEase</span>, your trusted partner for seamless event management.
        We believe every special occasion deserves perfect planning, tailored services, and memorable experiences.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Founded in 2025, our mission is to connect event-goers with the best venues, catering, decor, and service providers — all in one place.
        Whether you’re a business owner offering halls, catering, or decor, or a user looking to plan your dream event,{" "}
        <span className="font-semibold text-indigo-600">EventEase</span> is here to simplify the process.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our platform is designed with you in mind — easy to use, fast, and reliable, with transparent communication and flexible options.
        Join us and experience event planning made effortless.
      </p>
      <div className="text-center mt-10">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="People celebrating an event with decorations and lights"
          className="mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
}
