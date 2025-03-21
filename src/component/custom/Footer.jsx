import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <motion.div
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   whileInView={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.5,delay:0.5 }}
    //   viewport={{once:true}}
      className="bg-gray-100 py-5 px-5"
    >
      <div className="flex justify-center gap-[15%] items-center py-1 mb-8 flex-col sm:flex-col md:flex-row">
        <div className=" flex gap-[10%] mb-5 sm:mb-5 ">
          <div className="bg-gray-200 p-3 rounded-[50%] hover:bg-[#E92D28] hover:text-white">
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Instagram size={20} />}
            </a>
          </div>
          <div className="bg-gray-200 p-3 rounded-[50%] hover:bg-[#E92D28] hover:text-white">
            <a
              href="https://youtube.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Youtube size={20} />}
            </a>
          </div>
          <div className="bg-gray-200 p-3 rounded-[50%] hover:bg-[#E92D28] hover:text-white">
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Facebook size={20} />}
            </a>
          </div>
          <div className="bg-gray-200 p-3 rounded-[50%] hover:bg-[#E92D28] hover:text-white">
            <a
              href="https://linkedin.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Linkedin size={20} />}
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 sm:gap-6 md:gap-20 flex-col sm:flex-col md:flex-row">
          <Link className="list-none font-bold text-[15px] hover:text-[#E92D28] cursor-pointer">
            All Recipie
          </Link>
          <li className="list-none font-bold text-[15px] hover:text-[#E92D28] cursor-pointer">
            FAQ
          </li>
          <Link className="list-none font-bold text-[15px] hover:text-[#E92D28] cursor-pointer">
            Terms and Conditions
          </Link>
          <Link
            to="/contact-us"
            className="list-none font-bold text-[15px] hover:text-[#E92D28] cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="flex justify-center items-center flex-col mt-8">
        <p className="text-center text-[16px]">
          Discover a world of flavors with Mero Khana! Find delicious recipes,
          expert cooking tips, and culinary inspiration to elevate your kitchen
          skills. <br /> Explore, create, and savor every moment!
        </p>
        <p className="my-5  text-[14px] leading-[24px] font-semibold sm:text-center text-center">
          © 2025 Mero Khana. All rights reserved. Designed by Ravi Shrestha.
        </p>
        <img
          className="ml-3 w-40 h-14 my-auto"
          src="/public/logoo.png"
          alt="Logo"
        />
      </div>
    </motion.div>
  );
};

export default Footer;
