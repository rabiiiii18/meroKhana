import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "../../component/custom/Header";

const ForgotPassword = () => {  
  const [isOpen, setIsOpen] = useState(false);

  

  return (
  
   <div>
     <div className="flex flex-col items-center justify-center min-h-[85vh] bg-red-100">
        <div
          className="inset-0 flex items-center justify-center select-none"
          onClick={() => setIsOpen(false)} // Click outside to close
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-[400px] min-h-[330px] py-5 px-8 rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
          >
            {/* Close Button */}
            <X
              size={30}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 cursor-pointer transition-all duration-300"
              onClick={() => setIsOpen(false)}
            />

            <h1 className="text-3xl font-bold text-center text-gray-800">
              Forgot Password?
            </h1>
            <p className="text-center mt-2 text-[#3f3f46] font-semibold">
              No worries. We'll send you reset instructions.
            </p>

            <div className="mt-5">
              <label className="text-[16px] font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                className="border-2 border-gray-800 w-full p-2 my-3 outline-0 rounded-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-2 bg-[#E92D28] w-full rounded-md mt-3 text-white text-[18px] font-bold cursor-pointer"
              >
                Reset Password
              </motion.button>
            </div>
          </motion.div>
        </div>
     
    </div>
   </div>
  );
};

export default ForgotPassword;
