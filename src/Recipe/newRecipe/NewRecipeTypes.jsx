import React from 'react';
import NewRecipe from './NewRecipes';
import TypesButton from './TypesButton';
import useClickStore from '../../zustand/Store';
import AllRecipie from './newTypes/AllRecipie';
import Drinks from './newTypes/Drinks';
import Desserts from './newTypes/Desserts';
import Others from './newTypes/Breads';
import Appretizers from './newTypes/Appretizers';
import Lunch from './newTypes/Lunch';
import Snacks from './newTypes/Snacks';
import { motion } from "motion/react";

const NewRecipeTypes = () => {
  const { click } = useClickStore();

  const componentMap = {
    allRecipie: <AllRecipie />,
    appretizers: <Appretizers />,
    drinks: <Drinks />,
    lunch: <Lunch />,
    desserts: <Desserts />,
    snacks: <Snacks />,
    breads: <Others />,
  };

  return (
    <div>
      <NewRecipe />
      <TypesButton />
      {componentMap[click]}
      <div className="flex items-center w-full my-10 ">
        <div className="flex-grow border-t border-gray-300"></div>
        <motion.button
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.,ease:"easeInOut"}}
        viewport={{once:true}}
        
        className="mx-4 px-6 py-3 border border-gray-300 rounded-xl  font-semibold text-black bg-white cursor-pointer hover:text-white hover:bg-[#E92D28]">
          Explore All Recipes
        </motion.button>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default NewRecipeTypes;
