import React from "react";

export default function TermsPrivacy() {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">
        Terms & Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-dark">Terms and Conditions</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to our Event Management platform! By using our services, you agree to comply with
          and be bound by the following terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 leading-relaxed space-y-2">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            You agree not to use the platform for any unlawful or prohibited activities.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate these terms.
          </li>
          <li>
            Event bookings are subject to availability and confirmation from business owners.
          </li>
          <li>
            Payments must be completed securely through our platform.
          </li>
          <li>
            We are not responsible for any damages resulting from third-party services.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          By continuing to use our platform, you accept these terms in full.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-dark">Privacy Policy</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Your privacy is very important to us. This policy explains how we collect, use, and protect
          your personal information.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 leading-relaxed space-y-2">
          <li>We collect only the necessary data to provide our services effectively.</li>
          <li>Your data is securely stored and never shared with unauthorized parties.</li>
          <li>
            We use cookies to improve user experience and to keep you logged in.
          </li>
          <li>
            You have the right to access, modify, or delete your personal information.
          </li>
          <li>
            We comply with all applicable data protection laws.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns about your privacy, please contact us.
        </p>
      </section>
    </div>
  );
}
