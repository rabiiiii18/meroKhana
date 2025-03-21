import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
import { Search, Utensils } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../zustand/SearchStore";

const Carousel = () => {
  const navigate = useNavigate();

  const { search, setSearch } = useSearchStore();
  const onSearchHandle = (search) => {
    // const formattedName = encodeURIComponent(search.toLowerCase());
    setSearch(getValues("search"));
    navigate(`/search`);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  return (
    <div
      className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] rounded-xl flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/search-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute sm:top-[15%] md:top-[30%] inset-x-0 ms-[5%] 
             max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[55%] p-4 "
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 
               leading-tight sm:leading-snug md:leading-[50px] lg:leading-[62px] 
               font-extrabold text-center"
        >
          You <span className="text-[#E92D28] inline-block">don't know</span>{" "}
          how to make <br className="hidden sm:block" />
          <ReactTyped
            strings={["Dish you have in mind?", "Let's cook together!"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </motion.h1>

        {/* Description */}
        <motion.p
        initial={{opacity:0,y:80}}
        animate={{opacity:1,y:0}}
        transition={{ duration: 0.9 }}
         className="text-[18px] leading-normal text-start text-[#5C5D62] font-normal mt-5">
          Feed your imagination and spark your creativity. From cravings to
          creations, let your ideas flourish and uncover the perfect recipe
          waiting to be discovered.
        </motion.p>

        {/* Search Input Section */}
        <motion.div
        initial={{opacity:0,y:80}}
        animate={{opacity:1,y:0}}
        transition={{ delay: 0.5,duration:0.9 }}

         className="mt-[52px] flex items-center relative w-full">
          <Utensils className="absolute left-4 text-[#E92D28]" />
          <input
            type="text"
            {...register("search", {})}
            className="pl-[68px] py-3 md:text-[18px] sm:text-[12px] bg-white outline-none rounded-xl w-full shadow-md"
            placeholder="What do you like to cook today...."
          />
          <Search
            onClick={handleSubmit(onSearchHandle)}
            className="px-2 py-2 bg-[#E92D28] text-white rounded-md w-[40px] h-[40px] absolute right-4 cursor-pointer"
          />
        </motion.div>

        {/* Keyword Search Hint */}
        <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7,duration:0.9 }}
         className="mt-7 text-[16px] leading-[24px] text-[#5C5D62]">
          Type a keyword and discover recipes that turn your cravings into
          delicious reality!
        </motion.p>
      </div>
    </div>
  );
};

export default Carousel;
