import React from "react";

const Directions = ({ recipe }) => {
  return (
    <div>
     {recipe?(
       <div className="flex justify-center items-center p-3">
       <div className="w-[90%]">
         <h1 className="text-[20px] sm:text-[20px] md:text-[23px] font-bold">Directions</h1>

         <div className="flex gap-5">
           <div className=" sm:w-full w-full md:w-[70%]">
             {recipe.directions?.map((item, index) => (
               <div key={index} className="h-auto p-4">
                 <div className="flex gap-5 items-center mt-1  ">
                   <div className="bg-white border-1 border-gray-400 hover:bg-red-500 w-[35px] h-[35px] p-1 rounded-full flex justify-center items-center transition-all duration-300">
                     <svg
                       width="25px"
                       height="25px"
                       viewBox="0 0 16 16"
                       xmlns="http://www.w3.org/2000/svg"
                       version="1.1"
                       fill="none"
                       stroke="black"
                       className="transition-colors duration-300 hover:stroke-white"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="1.5"
                     >
                       <polyline points="2.75 8.75,6.25 12.25,13.25 4.75" />
                     </svg>
                   </div>

                   <div className="text-[18px] sm:text-[18px] md:text-[20px] leading-[32px] text-[#e92d28] font-semibold">
                     {item.title}
                   </div>
                   <div className="flex-grow border-t border-gray-300"></div>
                 </div>
                 <div className="flex flex-col md:flex-row sm:flex-col border-1 border-gray-300 p-3 my-5 rounded-2xl gap-[10%] select-none">
                   <div className="w-full sm:w-full md:w-[45%]">
                     <img
                       src="/Direction/direction-1.jpg"
                       className="rounded-2xl object-cover"
                     />
                   </div>
                   <div className="w-full sm-w-full  md:w-[55%] sm:mt-5 mt-5 md:mt-0">
                     <p className="text-[17px] leading-[27px] font-normal text-[#3f3f46] text-justify">
                       {item.step}
                     </p>
                    
                   </div>
                 </div>
               </div>
             ))}

             
           </div>
           {/* <div className=" h-[100vh] w-[30%] px-5">
             <h1 className="text-[23px] font-bold">Recipies</h1>
           </div> */}
         </div>
       </div>
     </div>
     ):''}
    </div>
  );
};

export default Directions;
