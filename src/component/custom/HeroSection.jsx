import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8,delay:0.3 }}
        viewport={{ once: true }}
        className="min-h-[35vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-[75vh] rounded-xl mt-[5%] select-none relative sm:p-8"
        style={{
          backgroundImage: "url('/search-hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "contain",
        }}
      >
        <div className="absolute right-0 lg:top-[10%] top-[6%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] mr-4 sm:mr-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transition: 0.9, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight sm:leading-snug md:leading-[50px] lg:leading-[60px]"
          >
            Discover fresh and easy recipes to inspire your meals{" "}
            <span className="text-[#E92D28]">every day.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transition: 0.9, delay: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-7 text-[16px] sm:text-[18px] font-semibold leading-[22px] sm:leading-[25px]"
          >
            Discover fresh and easy recipes for every meal. From quick
            breakfasts and light lunches to hearty dinners and indulgent
            desserts, find endless inspiration to make cooking simple, fun, and
            enjoyable for any occasion or gathering!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.2,
              // ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="px-4 py-3 outline-none cursor-pointer rounded-xl mt-5 sm:mt-[8%] font-semibold bg-white hover:bg-[#E92D28] hover:text-white transition"
          >
            View Recipe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
