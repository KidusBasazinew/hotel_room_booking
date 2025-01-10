import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Get in Touch</h3>
            <p className="mt-2 text-gray-600">
              We&apos;d love to hear from you! Please fill out the form below
              and we&apos;ll get in touch with you shortly.
            </p>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Contact Information
            </h3>
            <p className="mt-2 text-gray-600">
              Feel free to reach out to us through the following contact
              details:
            </p>
            <ul className="mt-4 text-gray-600">
              <li className="flex items-center mt-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Hotel Street, City, Country
              </li>
              <li className="flex items-center mt-2">
                <i className="fas fa-phone-alt mr-2"></i>
                +123 456 7890
              </li>
              <li className="flex items-center mt-2">
                <i className="fas fa-envelope mr-2"></i>
                info@hotelname.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
