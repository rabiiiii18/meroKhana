import React, { useState } from "react";
import { ChevronDown, ChevronUp, CirclePlus, X } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

const Directions = ({ register, errors }) => {
  const [steps, setSteps] = useState([]);
  const [openIds, setOpenIds] = useState({});

  const handleAddStep = () => {
    const newId = steps.length + 1;
    setSteps([...steps, { id: newId }]);

  };

  const handleRemoveStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
    setOpenIds((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const toggleStep = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  return (
    <div className="bg-white w-[70%]">
      {/* Step List */}
      {steps.map((step) => (
        <div
          key={step.id}
          className="border rounded border-gray-400 my-2 transition-all relative"
        >
          {/* Title Row */}
          <div
            onClick={() => toggleStep(step.id)}
            className="flex items-center p-1 h-11 cursor-pointer relative"
          >
            <h1 className="text-[16px] font-semibold">Step {step.id}</h1>
            {openIds[step.id] ? (
              <ChevronUp
                size={35}
                className="bg-gray-300 p-1 rounded-md absolute right-10 transition-all duration-500 hover:bg-[#E92D28] hover:text-white"
              />
            ) : (
              <ChevronDown
                size={35}
                className="bg-gray-300 p-1 rounded-md absolute right-10 transition-all duration-500 hover:bg-[#E92D28] hover:text-white"
              />
            )}
            {/* Remove Button */}
            <X
              size={20}
              className="absolute right-2 text-red-500 hover:text-red-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveStep(step.id);
              }}
            />
          </div>

          {/* Step Details (Only Show If Open) */}
          {openIds[step.id] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden transition-all p-2"
            >
              <div className="mt-2">
                <label className="text-[16px] leading-[20px] font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Step title"
                  {...register(`title[${step.id}]`, {
                    required: "This field is required",
                  })}
                  className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.title?.[step.id] ? "border-red-500" : "border-gray-400"
                    }`}
                />
              </div>
              <div className="mt-2">
                <label className="text-[16px] leading-[20px] font-semibold">
                  Steps
                </label>
                <textarea
                  {...register(`step[${step.id}]`, { required: "This field is required" })}
                  className={`w-full my-4 px-4 py-3 border rounded outline-0 transition-all ${errors.step?.[step.id] ? "border-red-500" : "border-gray-400"
                    }`}
                  rows="4"
                  placeholder="Enter step details..."
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="text-[16px] leading-[20px] font-semibold">
                  Images
                </label>
                <input
                  type="file"
                  {...register(`images[${step.id}]`, {
                    required: "This field is required",
                  })}
                  className="file:mr-4 file:rounded file:border-0 file:bg-gray-300 file:px-4 file:py-2 file:font-semibold file:text-black rounded transition-all outline-0 my-4"
                />
              </div>
            </motion.div>
          )}
        </div>
      ))}

      {/* Add More Button */}
      <div className="my-5 flex flex-start">
        <span
          onClick={handleAddStep}
          className="flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:text-[#E92D28] text-[16px] font-semibold"
        >
          <CirclePlus size={20} /> Add more
        </span>
      </div>
    </div>
  );
};

export default Directions;
