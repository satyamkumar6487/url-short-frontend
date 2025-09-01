import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {  useStroreContext } from "../contextApi/ContextApi";
const LandingPage = () => {
  const navigate = useNavigate();

  const {token} =useStroreContext();
  console.log("Token in landing page" , token);


const dashBoardNavigateHandler = () => {


};


  return (
    <div className="min-h-screen px-6 bg-gray-50 flex flex-col lg:flex-row items-center justify-center">
      
      {/* Text on Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-900 text-center mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Linklytics Simplifies URL Shortening For Efficient Sharing
        </motion.h1>

        <motion.p
          className="text-gray-600 text-center max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.1 }}
        >
          Linklytics streamlines the process of URL shortening, making sharing
          links effortless and efficient. With its user-friendly interface,
          Linklytics allows you to generate concise, easy-to-share URLs in
          seconds. Simplify your sharing experience with Linklytics today.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={dashBoardNavigateHandler}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
          >
            Manage Links
          </button>
          <button
            onClick={dashBoardNavigateHandler}
            className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-100"
          >
            Create Short Link
          </button>
        </motion.div>

        {/* Cards Section Below Text */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-center text-slate-800 font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto mb-6">
            Trusted by individuals and teams at the world's best companies
          </p>

          <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
            {[
              {
                title: "Simple URL Shortening",
                desc: "Experience the ease of creating short, memorable URLs in just a few clicks.",
              },
              {
                title: "Powerful Analytics",
                desc: "Gain insights into your link performance with our analytics dashboard.",
              },
              {
                title: "Enhanced Security",
                desc: "All shortened URLs are protected with advanced encryption.",
              },
              {
                title: "Fast and Reliable",
                desc: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card title={card.title} desc={card.desc} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Image on Right Side */}
      <motion.div
        className="flex-1 flex justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.img
          className="w-[250px] sm:w-[300px] md:w-[350px] object-contain"
          src="/images/visual-studio-code-logotic.png"
          alt="Company Logos"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;
