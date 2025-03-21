import React from "react";
import { useForm } from "react-hook-form";

const LeaveComment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div>
      <div className="mx-[8%] my-[5%]">
        <div className="my-5">
          <h1 className="text-[24px] leading-[31px] font-bold ">Leave a comment</h1>
          <p className="text-[16px] leading-[26px] text-[#3f3f46] mt-5">
            Your email address will not be published.
          </p>
        </div>
        <div className="md:w-[60%] sm:w-full w-full">
          <form className="flex  flex-col  rounded-2xl" action="">
            <div>
              <textarea
                className={`border rounded px-4 py-3 w-full  text-[18px] mb-4 outline-0 transition-all ${
                  errors.username ? "border-red-500 " : "border-gray-400 "
                }`}
                placeholder="Your Message"
                rows="10"
                cols="60"
              />
            </div>
            <div className="flex justify-between gap-4">
              <input
                type="Name"
                placeholder="Name"
                {...register("name", { required: "This field is required" })}
                className={`border rounded px-4 py-3 h-[45px] w-full mb-4  text-[18px] outline-0 transition-all ${
                  errors.username ? "border-red-500 " : "border-gray-400 "
                }`}
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "This field is required" })}
                className={`border rounded px-4 py-3 h-[45px] mb-4 w-full  text-[18px] outline-0 transition-all ${
                  errors.username ? "border-red-500 " : "border-gray-400 "
                }`}
              />
            </div>
            <div className="flex justify-center flex-col">
              <button className="px-2 py-3 w-[170px] rounded-sm bg-[#000] text-white font-bold  mt-[8%] mb-[20px] cursor-pointer text-[18px] hover:text-white hover:bg-[#E92D28] hover:border-1">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
