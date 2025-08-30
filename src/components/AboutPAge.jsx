import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
        <div className="bg-white w-full sm:py-10 py-8">
          <h1 className="sm:text-4xl text-3xl font-bold italic text-slate-800 mb-3">
            About Linklytics
          </h1>
          <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
            Linklytics simplifies URL shortening for efficient sharing. Easily
            generate, manage, and track your shortened links.
          </p>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Simple URL Shortening */}
            <div className="flex gap-3 items-start">
              <FaLink className="text-blue-500 text-2xl" />
              <div>
                <h2 className="text-lg font-semibold">Simple URL Shortening</h2>
                <p className="text-gray-600 text-sm">
                  Create short, memorable URLs in just a few clicks. Quick setup
                  ensures hassle-free shortening.
                </p>
              </div>
            </div>

            {/* Powerful Analytics */}
            <div className="flex gap-3 items-start">
              <FaChartLine className="text-green-500 text-2xl" />
              <div>
                <h2 className="text-lg font-semibold">Powerful Analytics</h2>
                <p className="text-gray-600 text-sm">
                  Gain insights into your link performance with detailed
                  analytics dashboard.
                </p>
              </div>
            </div>

            {/* Enhanced Security */}
            <div className="flex gap-3 items-start">
              <FaShareAlt className="text-purple-500 text-2xl" />
              <div>
                <h2 className="text-lg font-semibold">Enhanced Security</h2>
                <p className="text-gray-600 text-sm">
                  Shortened URLs are protected with advanced encryption to keep
                  your data safe.
                </p>
              </div>
            </div>

            {/* Fast and Reliable */}
            <div className="flex gap-3 items-start">
              <FaEdit className="text-red-500 text-2xl" />
              <div>
                <h2 className="text-lg font-semibold">Fast and Reliable</h2>
                <p className="text-gray-600 text-sm">
                  Enjoy lightning-fast redirects and high uptime with our secure
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
