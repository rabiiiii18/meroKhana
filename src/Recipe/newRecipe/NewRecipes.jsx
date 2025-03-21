import React from "react";
import { motion } from "motion/react";

const NewRecipes = () => {
  return (
    <div>
      <div className="flex justify-center items-center select-none">
        <div className="mt-[5%]">
          <motion.div
          initial={{opacity:0,y:-50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8,dealay:1}}
          viewport={{once:true}}
          >
            <h1 className="text-[26px] sm-text-[30px] md:text-[42px] leading-[59px] font-bold text-center">New Recipes</h1>
            <p className="text-center mt-2 text-[16px] leading-[27px]">
              Explore our latest recipes, from quick snacks to hearty meals and
              indulgent desserts.
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default NewRecipes;
