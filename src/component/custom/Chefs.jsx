import React from 'react'
import { motion } from "motion/react";

const Chefs = () => {
    return (
        <div>
            <div className='flex justify-center items-center text-center flex-col'>
                <motion.h1
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.5}}
                viewport={{once:true}}
                
                className='text-[30px] sm:text-[30px] md:text-[40px] font-bold'><span className='text-[#E92D28]'>Meet Our</span> Talented Chefs</motion.h1>
                <motion.p
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.4,delay:0.2,ease:"easeInOut"}}
                viewport={{once:true}}
                 className='text-center w-full sm:w-full md:w-[60%] text-[14px] mt-4'>Get to know the masters of flavor our talented chefs bring years of experience, passion, and creativity to every dish. Discover their unique culinary journeys, from their first inspirations in the kitchen to their most cherished cooking memories.</motion.p>
            </div>

            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5,delay:0.2,ease:"easeInOut"}}
            viewport={{once:true}}
             className='flex gap-[6%] mt-[5%] px-[10%] items-center justify-center'>
                <div className='w-auto flex  flex-col items-center'>
                    <img src="/user.jpg" className=" w-[70%] rounded-[50%]" />
                    <div className='flex  flex-col justify-center items-center my-5'>
                        <span className='text-[#E92D28] font-semibold'>Contributers</span>
                        <span className='font-semibold'>Sophia Bessnnett</span>
                    </div>
                </div>
                <div className='w-auto flex  flex-col items-center'>
                    <img src="/user.jpg" className=" w-[70%] rounded-[50%]" />
                    <div className='flex  flex-col justify-center items-center my-5'>
                        <span className='text-[#E92D28] font-semibold'>Contributers</span>
                        <span className='font-semibold'>Sophia G</span>
                    </div>
                </div>
               
            </motion.div>
            <motion.div 
            initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
                viewport={{once:true}}
                 className='flex justify-center items-center my-[5%]'>
                <img src="/restaurant-banner.gif" alt="" />
            </motion.div>

        </div>
    )
}

export default Chefs
