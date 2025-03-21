import React, { useState } from "react";
import { ChevronDown, ChevronUp, CirclePlus, X } from "lucide-react";
import { motion } from "framer-motion";

const Ingredients = ({ register, errors }) => {
  const [ingredients, setIngredients] = useState([]);
  const [openIds, setOpenIds] = useState({});

  const handleAddIngredient = () => {
    const newId = ingredients.length + 1;
    setIngredients([...ingredients, { id: newId }]);
  };

  const handleRemoveIngredient = (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id));
    setOpenIds((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const toggleIngredient = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white w-[70%]">
      {/* Serving Size, Cuisine, Cooking Time, Degree */}
      <form className="flex gap-5">
        <div>
          <label className="text-[16px] leading-[20px] font-semibold">
            Serving size
          </label>
          <input
            type="number"
            {...register("serving", { required: "This field is required" })}
            className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.serving ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="1"
          />

        </div>
        <div>
          <label className="text-[16px] leading-[20px] font-semibold">
            Cuisine
          </label>
          <input
            type="text"
            {...register("cuisine", { required: "This field is required" })}
            className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.cuisine ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="Nepalese"
          />

        </div>
        <div>
          <label className="text-[16px] leading-[20px] font-semibold">
            Cooking Time
          </label>
          <input
            type="text"
            {...register("time", { required: "This field is required" })}
            className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.time ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="40 min"
          />

        </div>
        <div>
          <label className="text-[16px] leading-[20px] font-semibold">
            Degree
          </label>
          <input
            type="text"
            {...register("degree", { required: "This field is required" })}
            className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.degree ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="Easy"
          />

        </div>
      </form>

      {/* Ingredients List */}
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className="border rounded border-gray-400 my-2 transition-all relative"
        >
          {/* Title Row */}
          <div
            onClick={() => toggleIngredient(ingredient.id)}
            className="flex items-center p-1 h-11 cursor-pointer relative"
          >
            <h1 className="text-[16px] font-semibold">Ingredient {ingredient.id}</h1>
            {openIds[ingredient.id] ? (
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
              size={25}
              className="absolute right-2 text-red-500 hover:text-red-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveIngredient(ingredient.id);
              }}
            />
          </div>

          {/* Ingredient Details (Only Show If Open) */}
          {openIds[ingredient.id] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden transition-all p-2"
            >
              <div className="mt-2">
                <label className="text-[16px] leading-[20px] font-semibold">
                  Ingredients
                </label>
                <input
                  type="text"
                  placeholder="Name of ingredient"
                  {...register(`ingredients[${ingredient.id}]`, {
                    required: "This field is required",
                  })}
                  className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.ingredients?.[ingredient.id]
                      ? "border-red-500"
                      : "border-gray-400"
                    }`}
                />

              </div>
              <div className="flex justify-between">
                <div className="w-60">
                  <label className="text-[16px] leading-[20px] font-semibold">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Example: 3, 5, 220"
                    {...register(`quantity[${ingredient.id}]`, {
                      required: "This field is required",
                    })}
                    className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.quantity?.[ingredient.id]
                        ? "border-red-500"
                        : "border-gray-400"
                      }`}
                  />

                </div>
                <div className="w-60">
                  <label className="text-[16px] leading-[20px] font-semibold">
                    Units
                  </label>
                  <input
                    type="text"
                    placeholder="Example: kg, pcs, g"
                    {...register(`units[${ingredient.id}]`, {
                      required: "This field is required",
                    })}
                    className={`w-full my-4 px-4 py-2 border rounded outline-0 transition-all ${errors.units?.[ingredient.id]
                        ? "border-red-500"
                        : "border-gray-400"
                      }`}
                  />

                </div>
              </div>
            </motion.div>
          )}
        </div>
      ))}

      {/* Add More Button */}
      <div className="my-5 flex flex-start">
        <span
          onClick={handleAddIngredient}
          className="flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:text-[#E92D28] text-[16px] font-semibold"
        >
          <CirclePlus size={20} /> Add more
        </span>
      </div>
    </div>
  );
};

export default Ingredients;