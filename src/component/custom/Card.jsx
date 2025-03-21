import React from "react";
import { motion } from "motion/react";

const Card = ({ recipe, onClick }) => {
  return (
    <motion.div
    initial={{opacity:0,scale:0.5}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:0.7,delay:0.2}}
    viewport={{ once: true }}
      className="select-none w-full h-[500px  cursor-pointer flex justify-center items-center"
      onClick={onClick}
    >
      <motion.div
      initial={{opacity:0,sacle:0.5}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.8,delay:0.5}}
      
      className="flex  justify-center items-cente">
        <div className="flex gap-2 bg-white w-[65px] px-2 py-1 rounded-2xl select-none absolute left-12 top-12 md:left-3 md:top-3 sm:left-12 sm:top-12 ">
          <span>
            <img
             src="/star.png" className="w-[20px]" />
          </span>
          <span className="text-[15px] font-bold">{recipe.rating}</span>
        </div>
        <div className="absolute sm:top-12 sm:left-60 left-60 top-12 md:left-55 md:top-3   flex justify-center items-center flex-col gap-3 cursor-pointer ">
          <span className="bg-white p-2 flex justify-center items-center rounded-full text-[#E92D28] hover:bg-[#E92D28] hover:text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 10.1667C17.075 8.95 18.3333 7.49167 18.3333 5.58333C18.3333 4.36776 17.8504 3.20197 16.9909 2.34243C16.1314 1.48289 14.9656 1 13.75 1C12.2833 1 11.25 1.41667 9.99999 2.66667C8.74999 1.41667 7.71666 1 6.24999 1C5.03441 1 3.86863 1.48289 3.00908 2.34243C2.14954 3.20197 1.66666 4.36776 1.66666 5.58333C1.66666 7.5 2.91666 8.95833 4.16666 10.1667L9.99999 16L15.8333 10.1667Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <span className="bg-white p-2 flex justify-center items-center rounded-full text-[#E92D28] hover:bg-[#E92D28]  hover:text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 15L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </div>
      </motion.div>
      <div
     
      className="w-[270px] h-[500px] rounded-xl cursor-pointer flex flex-col justify-center   sm:flex md:block ">
        <img
          src={recipe.thumbnail}
          className="w-[270px] h-[300px] rounded-xl"
        />
        <div className="mt-3">
          <span className="font-bold text-[20px] text-[#E92D28]">
            {recipe.category}
          </span>
          <h1 className="font-bold text-[20px] hover:text-[#E92D28]">
            {recipe.title}
          </h1>
        </div>
        <div className="flex gap-[18%] items-center mt-3">
          <div className="flex gap-[10px] items-center">
            <span>
              <img src="./time.png" className="w-[20px]" />
            </span>
            <span className="text-gray-500 font-semibold">{recipe.time}</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <span>
              <svg
                fill="#3f3f46"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z" />
              </svg>
            </span>
            <span className="text-gray-500 font-semibold">
              {recipe.cuisine}
            </span>
          </div>
        </div>
        <div className="flex gap-[10px] items-center mt-2">
          <span>
            <img src="/chef.png" className="w-[20px]" />
          </span>
          <span className="text-gray-500 font-semibold">{recipe.degree}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
