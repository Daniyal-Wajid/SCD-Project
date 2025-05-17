import React, { useState } from "react";

const faqs = [
  {
    question: "How do I register as a business owner?",
    answer:
      "Simply go to the Register Business page, fill in your details, and submit your application. Once approved, you can list your services.",
  },
  {
    question: "Can I book multiple services for one event?",
    answer:
      "Yes, you can select catering, decor, and hall services all in one booking to make your event perfect.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, cancellations can be made up to 48 hours before the event for a full refund. Please check our terms and conditions for more details.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to us via the Contact Us page or email support@eventmgmt.com anytime.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-2xl font-bold text-primary">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 border-t border-gray-300 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
