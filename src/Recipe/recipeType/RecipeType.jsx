import React, { useState } from "react";
import LatestRecipe from "./LatestRecipe";
import PopularRecipe from "./PopularRecipe";
import FastestRecipe from "./FastestRecipe";
import { motion } from "motion/react";

const RecipeType = () => {
  const [type, setType] = useState("latest");
  return (
    <div>
     <motion.div
     initial={{opacity:0,y:60}}
     whileInView={{opacity:1,y:0}}
     transition={{delay:0.2,duration:0.6}}
     viewport={{ once: true }}
     className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-[8%] lg:mt-[3%] mt-[6%]">
        <li
          className={`list-none lg:text-[22px] text-[20px] sm:text-xl block md:none leading-[31px]  font-bold cursor-pointer 
                select-none hover:underline underline-offset-[10px] sm:underline-offset-[20px] 
                hover:text-[#E92D28] ${
                  type === "latest"
                    ? "underline text-[#E92D28]"
                    : "text-gray-500"
                }`}
          onClick={() => setType("latest")}
        >
          Latest Recipes
        </li>

        <li
          className={`list-none lg:text-[22px] text-[20px] smsm:text-xl block md:none leading-[31px] font-bold cursor-pointer 
                select-none hover:underline underline-offset-[10px] sm:underline-offset-[20px] 
                hover:text-[#E92D28] ${
                  type === "popular"
                    ? "underline text-[#E92D28]"
                    : "text-gray-500"
                }`}
          onClick={() => setType("popular")}
        >
          Most Popular Recipes
        </li>

        <li
          className={`list-none lg:text-[22px] text-[20px] sm sm:text-xl block md:none leading-[31px]  font-bold cursor-pointer 
                select-none hover:underline underline-offset-[10px] sm:underline-offset-[20px] 
                hover:text-[#E92D28] ${
                  type === "fastest"
                    ? "underline text-[#E92D28]"
                    : "text-gray-500"
                }`}
          onClick={() => setType("fastest")}
        >
          Fastest Recipes
        </li>
      </motion.div>

      <div>
        {type === "latest" ? (
          <LatestRecipe />
        ) : type === "popular" ? (
          <PopularRecipe />
        ) : type === "fastest" ? (
          <FastestRecipe />
        ) : null}
      </div>
    </div>
  );
};

export default RecipeType;
