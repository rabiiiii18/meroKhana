import React, { useEffect, useState } from "react";
import Header from "../../component/custom/Header";
import Footer from "../../component/custom/Footer";
import { useForm } from "react-hook-form";
import Ingridents from "./Ingridents";
import Directions from "./Directions";
import { toast } from 'react-toastify';

const AddRecipe = () => {
  const [active, setActive] = useState("ingridents");
  
// useEffect(()=>{
//   scrollTo(0,0)
// })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    return toast.success("Recipe Added Successfully.");
  };

  const componentMap = {
    ingridents: <Ingridents register={register} errors={errors} />,
    directions: <Directions register={register} errors={errors} />,
  };

  return (
    <div>
      <Header />
      <div
        className="h-[300px] flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: "url('/recipe-bg.svg')",
          objectFit: "cover",
        }}
      >
        <h1 className="text-[45px] font-bold">Add recipe</h1>
        <p className="text-center w-[60%] mt-5">
          Discover and share your favorite recipes on meroKhana! Add your own
          delicious dishes and inspire others with new culinary creations.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center my-[5%] flex-col select-none relative">
          <form
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col justify-center w-[70%] items-center relative"
          >
            <div className="w-full px-[5%]">
              <label className="text-[16px] leading-[20px] font-semibold">
                Title
              </label>
              <input
                type="text"
                {...register("title", { required: "This field is required" })}
                className={`border rounded px-4 py-2 h-[50px] w-full my-4 outline-0 transition-all ${
                  errors.title ? "border-red-500 " : "border-gray-400 "
                }`}
              />
            </div>

            {/* Category */}
            <div className="w-full px-[5%]">
              <label className="text-[16px] leading-[20px] font-semibold">
                Category
              </label>
              <input
                type="text"
                {...register("category", {
                  required: "This field is required",
                })}
                className={`border rounded px-4 py-2 h-[50px] w-full my-4 outline-0 transition-all ${
                  errors.category ? "border-red-500 " : "border-gray-400 "
                }`}
              />
            </div>

            {/* Excerpt */}
            <div className="w-full px-[5%]">
              <label className="text-[16px] leading-[20px] font-semibold">
                Excerpt
              </label>
              <textarea
                {...register("excerpt", { required: "This field is required" })}
                className={`w-full my-4 px-4 py-3 border rounded transition-all outline-0 ${
                  errors.excerpt ? "border-red-500" : "border-gray-400"
                }`}
                rows="4"
                placeholder="Enter your text here..."
              />
            </div>

            {/* File Inputs */}
            <div className="flex justify-between w-full gap-20 px-[5%] mb-[5%]">
              <div className="w-full flex flex-col">
                <label className="text-[16px] leading-[20px] font-semibold">
                  Thumbnail
                </label>
                <input
                  type="file"
                  {...register("thumbnail", {
                    required: "This field is required",
                  })}
                  className={`file:mr-4 file:rounded file:border-0 file:bg-gray-300 file:px-4 file:py-2 file:font-semibold file:text-black rounded transition-all outline-0 my-4 ${
                    errors.thumbnail
                      ? "border border-red-500"
                      : "border-gray-400"
                  }`}
                />
              </div>
             
            </div>

            {/* Sidebar Navigation */}
            <div className="flex w-full px-[5%]">
              <div className="w-[30%]">
                <div className="flex flex-col gap-5">
                  <div
                    onClick={() => setActive("ingridents")}
                    className={`p-2 py-2 rounded w-[80%] cursor-pointer ${
                      active === "ingridents" ? "bg-gray-300" : ""
                    }`}
                  >
                    <label className="text-[16px] px-2 py-3 cursor-pointer leading-[20px] font-semibold">
                      Ingredients
                    </label>
                  </div>
                  <div
                    onClick={() => setActive("directions")}
                    className={`p-2 py-2 rounded w-[80%] cursor-pointer ${
                      active === "directions" ? "bg-gray-300" : ""
                    }`}
                  >
                    <label className="text-[16px] px-2 py-3 cursor-pointer leading-[20px] font-semibold">
                      Directions
                    </label>
                  </div>
                </div>
              </div>

              {/* Content Rendering */}
              {componentMap[active]}
              
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6 w-full px-[5%]">
              <button
                type="submit"
                className="bg-[#E92D28] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-all cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
