import React, { useState } from "react";
import useClickStore from "../../zustand/Store";
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react";

const TypesButton = () => {
  const [isClick, setisClick] = useState("appretizers");
  const { click, setClick } = useClickStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, dealay: 1 }}
          viewport={{ once: true }}

          className="flex flex-row gap-3 my-8 select-none overflow-x-auto hide-scrollbar"
        >
          <button
            onClick={() => {
              setisClick("appretizers");
              setClick("appretizers");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'appretizers' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Appetizers
          </button>
          <button
            onClick={() => {
              setisClick("lunch");
              setClick("lunch");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'lunch' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Lunch
          </button>
          <button
            onClick={() => {
              setisClick("desserts");
              setClick("desserts");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'desserts' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Desserts
          </button>
          <button
            onClick={() => {
              setisClick("drinks");
              setClick("drinks");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'drinks' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Drinks
          </button>
          <button
            onClick={() => {
              setisClick("snacks");
              setClick("snacks");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'snacks' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Snacks
          </button>
          <button
            onClick={() => {
              setisClick("breads");
              setClick("breads");
            }}
            className={`rounded-3xl px-5 py-3 border-1 border-gray-200 text-black font-semibold cursor-pointer hover:bg-[#E92D28] hover:text-white ${isClick === 'breads' ? "bg-[#E92D28] text-white" : "bg-transparent text-black"
              }`}
          >
            Breads
          </button>
        </motion.div>
      </div>


      {/* <div className="flex justify-end me-10">
     <button
      className="text-[18px] font-bold cursor-pointer"
        onClick={() => {
          const route = routeMapping[isClick];
          if (route) {
            navigate(route);
          } else {
            console.log('Route not found');
          }
        }}
      >
        View more...   
      </button>
     </div> */}
    </div>
  );
};

export default TypesButton;