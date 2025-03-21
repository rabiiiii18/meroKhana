import React, { useEffect } from "react";
import Header from "../component/custom/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../component/custom/Footer";
import { toast } from "react-toastify";

const ContactUs = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Message sent successfully!");
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
        <h1 className="text-[45px] font-bold">Contact Us</h1>
        <p className="text-center w-[60%] mt-5">
          Connect with Merokhana! Have questions, need help, or ready to make a
          reservation? Our dedicated team is here to ensure you have a
          hassle-free experience. Reach out today, and let us assist you every
          step of the way.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex  flex-col  rounded-2xl p-6   w-[50%] mt-[6%] "
          action=""
        >
          <label htmlFor="" className="mb-3 font-bold">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "This field is required" })}
            className={`border rounded px-4 py-3 h-[45px] mb-4 outline-0 transition-all ${
              errors.name ? "border-red-500 " : "border-gray-400 "
            }`}
          />
          <label htmlFor="" className="mb-3 font-bold">
            Subject
          </label>
          <input
            type="text"
            {...register("subject", { required: "This field is required" })}
            className={`border rounded px-4 py-3 h-[45px] mb-4 outline-0 transition-all ${
              errors.subject ? "border-red-500 " : "border-gray-400 "
            }`}
          />
          <label htmlFor="" className="mb-3 font-bold">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "This field is required" })}
            className={`border rounded px-4 py-3 h-[45px] mb-4 outline-0 transition-all ${
              errors.email ? "border-red-500 " : "border-gray-400 "
            }`}
          />

          <label htmlFor="" className="mb-3 font-bold">
            Message
          </label>
          <textarea
            {...register("message", { required: "This field is required" })}
            className={`border rounded px-4 py-3 mb-4 outline-0 transition-all ${
              errors.message ? "border-red-500 " : "border-gray-400 "
            }`}
            placeholder="Enter your text..."
            rows="10"
            cols="90"
          />
          <div className="flex justify-center flex-col">
            <button
              type="submit"
              className="bg-[#E92D28] text-white px-6 py-2 w-[100px] rounded-md font-semibold hover:bg-red-700 transition-all cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
