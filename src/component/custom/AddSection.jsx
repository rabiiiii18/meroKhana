import { nav } from "motion/react-client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const AddSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-5 mb-15">
        <div
          className=" h-[60vh]  sm:h-[60vh] md:h-[100vh] w-[100%] sm:w-[100%] md:w-[50%] rounded-2xl relative"
          style={{
            backgroundImage: "url('/section-bg-02.jpg')",
            backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <div className="w-[90%] sm:w-[90%] md:w-[70%] absolute left-[8%] top-[12%] sm:top-[12%] md-top-[20%]">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, dealay: 0.5 }}
              viewport={{once:true}}
              className="text-white text-[26px] sm:text-[26px] md:text-[36px] font-bold "
            >
              Master the art of cooking and create delicious dishes in your own
              kitchen.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, dealay: 5 }}
              viewport={{once:true}}
              className="text-white my-[12%] text-[16px] text-left leading-7 font-semibold"
            >
              Discover expert tips and techniques to refine your skills. Try
              recipes that elevate your cooking, bringing confidence and
              creativity to every dish you make at home.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, dealay: 0.9 }}
              viewport={{once:true}}
              onClick={() => {
                navigate("/recipe");
              }}
              className="px-4 py-3  outline-none cursor-pointer rounded-xl mt-[2%] font-semibold bg-[#E92D28] text-white hover:bg-[#fff] hover:text-[#E92D28]"
            >
              View Recipe
            </motion.button>
          </div>
        </div>
        <div
          className=" h-[60vh]  sm:h-[60vh] md:h-[100vh] w-[100%] sm:w-[100%] md:w-[50%] rounded-2xl relative"
          style={{
            backgroundImage: "url('/section-bg-03.jpg')",
            backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <div className="w-[90%] sm:w-[90%] md:w-[70%] absolute left-[8%] top-[12%] sm:top-[12%] md-top-[20%]">
          <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.9, dealay: 0.5 }}
              className="text-black text-[26px] sm:text-[26px] md:text-[36px] font-bold "
            >
              "The secret of good cooking is first having a love of it."{" "}
              <span className="text-[15px] relative top-5">-James Beard</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, dealay: 5 }}
              viewport={{once:true}}
              className="text-black my-[12%] text-[16px] text-left leading-7 font-semibold"
            >
              Share your passion by adding your own unique recipes! Inspire
              others with your creativity, explore new flavors, and contribute
              to a growing collection of delicious homemade dishes.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, dealay: 0.9 }}
              viewport={{once:true}}
              onClick={() => {
                navigate("/recipe");
              }}
              className="px-4 py-3  outline-none cursor-pointer rounded-xl mt-[2%] font-semibold bg-[#E92D28] text-white hover:bg-[#fff] hover:text-[#E92D28]"
            >
              Add Recipe
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
