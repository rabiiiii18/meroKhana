import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../../component/custom/Header";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    email: "abc@gmail.com",
    password: "abc",
  });

  const onSignUpSubmit = () => {
    const emailValue = signUpValue("signUpEmail");
    const passwordValue = signUpValue("SignUpPassword");

    setSignup({
      email: emailValue,
      password: passwordValue,
    });
  
    toast.success("Sign Up successfully!");
    resetSignUp();
    setTimeout(() => {
      setIsSignUp(false);
    }, 1000);
  };

  const onSignInSubmit = () => {
    const emailValue = signInValue("email");
    const passwordValue = signInValue("password");

    if (emailValue === signup.email && passwordValue === signup.password) {
      toast.success("Sign In successfully!");
      const token = "dummyToken123"; 
      localStorage.setItem("authToken", token);
      resetSignIn();

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      console.log(emailValue);
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    reset();
    toast.success("Verification methods sent successfully!");
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    getValues: signUpValue,
    formState: { errors: errorsSignUp },
    reset: resetSignUp,
  } = useForm();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    getValues: signInValue,
    formState: { errors: errorsSignIn },
    reset: resetSignIn,
  } = useForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <div>
      <Header />
      {!isShow ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center my-20 relative"
        >
          <div
            className={`relative w-[768px] min-h-[470px] bg-transparent rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
              isSignUp ? "scale-100" : ""
            }`}
            style={{
              backgroundImage: "url('/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Sign Up Form */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center bg-white justify-center p-10 transition-all duration-500 ${
                isSignUp
                  ? "translate-x-full opacity-100 z-10"
                  : "opacity-0 -z-10"
              }`}
            >
              <h1 className="text-4xl font-bold text-gray-800">
                Create Account
              </h1>
              <div className="flex my-4 w-full justify-between items-center gap-5">
                <button className="py-2 px-1 text-[12px] w-[50%] font-bold rounded-sm bg-gray-100 cursor-pointer flex justify-around items-center">
                  <img src="/google.png" alt="" className="w-[20px] h-[20px]" />
                  Google
                </button>
                <button className="py-2 px-1 text-[12px] w-[50%] font-bold rounded-sm bg-gray-100 cursor-pointer flex justify-around items-center">
                  <img
                    src="/facebook.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  Facebook
                </button>
              </div>
              <span className="text-gray-500 text-sm">
                or use your email for registration
              </span>
              <form>
                <input
                  type="text"
                  {...registerSignUp("name", {
                    required: "This field is required",
                  })}
                  placeholder="Name"
                  className={`w-full mt-3 px-4 py-2 border rounded-md outline-none ${
                    errorsSignUp.name ? "border-red-500" : "border-gray-400"
                  }`}
                />
                <input
                  type="email"
                  {...registerSignUp("signUpEmail", {
                    required: "This field is required",
                  })}
                  placeholder="Email"
                  className={`w-full mt-3 px-4 py-2 border rounded-md outline-none ${
                    errorsSignUp.signUpEmail
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                />
                <input
                  type="password"
                  {...registerSignUp("SignUpPassword", {
                    required: "This field is required",
                  })}
                  placeholder="Password"
                  className={`w-full mt-3 px-4 py-2 border rounded-md outline-none ${
                    errorsSignUp.SignUpPassword
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                />
              </form>
              <motion.button
                onClick={handleSubmitSignUp(onSignUpSubmit)}
                whileHover={{ scale: 1.1 }}
                className="mt-5 px-6 py-2 bg-[#E92D28] text-white font-bold rounded-md shadow-md cursor-pointer"
              >
                Sign Up
              </motion.button>
            </div>

            {/* Sign In Form */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center bg-white justify-center p-10 transition-all duration-500 ${
                isSignUp ? "opacity-0 -z-10" : "opacity-100 z-10"
              }`}
            >
              <h1 className="text-4xl font-bold text-gray-800">Sign In</h1>
              <div className="flex my-4 w-full justify-between items-center gap-5">
                <button className="py-2 px-1 text-[12px] w-[50%] font-bold rounded-sm bg-gray-100 cursor-pointer flex justify-around items-center">
                  <img src="/google.png" alt="" className="w-[20px] h-[20px]" />
                  Google
                </button>
                <button className="py-2 px-1 text-[12px] w-[50%] font-bold rounded-sm bg-gray-100 cursor-pointer flex justify-around items-center">
                  <img
                    src="/facebook.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  Facebook
                </button>
              </div>
              <span className="text-gray-500 text-sm">
                or use your email and password
              </span>
              <form>
                <input
                  type="email"
                  {...registerSignIn("email", {
                    required: "This field is required",
                  })}
                  placeholder="Email"
                  className={`w-full mt-3 px-4 py-2 border rounded-md outline-none ${
                    errorsSignIn.email ? "border-red-500" : "border-gray-400"
                  }`}
                />
                <input
                  type="password"
                  {...registerSignIn("password", {
                    required: "This field is required",
                  })}
                  placeholder="Password"
                  className={`w-full mt-3 px-4 py-2 border rounded-md outline-none ${
                    errorsSignIn.password ? "border-red-500" : "border-gray-400"
                  }`}
                />
              </form>
              <p
                onClick={() => {
                  setIsShow(!isShow);

                }}
                className="text-blue-500 text-sm mt-4 hover:underline cursor-pointer"
              >
                Forgot Your Password?
              </p>
              <motion.button
                onClick={handleSubmitSignIn(onSignInSubmit)}
                whileHover={{ scale: 1.1 }}
                className="mt-5 px-6 py-2 bg-[#E92D28] text-white font-bold rounded-md shadow-md cursor-pointer"
              >
                Sign In
              </motion.button>
            </div>

            {/* Toggle Form Side */}
            <div
              className={`absolute top-0 left-1/2 w-1/2 h-full flex items-center justify-center text-white transition-all duration-500 ${
                isSignUp ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="text-center px-10">
                {isSignUp ? (
                  <>
                    <h1 className="text-3xl font-bold">Welcome Back!</h1>
                    <p className="mt-2">
                      Enter your personal details to use all site features
                    </p>
                    <motion.button
                      onClick={() => setIsSignUp(false)}
                      whileHover={{ background: "#E92D28", color: "white" }}
                      className="mt-4 px-6 py-2 bg-[white] text-[#E92D28] font-bold rounded-md shadow-md cursor-pointer select-none"
                    >
                      Sign In
                    </motion.button>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                    <p className="mt-2">
                      Register with your personal details to use all site
                      features
                    </p>
                    <motion.button
                      whileHover={{ background: "#E92D28", color: "white" }}
                      onClick={() => setIsSignUp(true)}
                      className="mt-4 px-6 py-2 bg-white text-[#E92D28] font-bold rounded-md shadow-md cursor-pointer select-none"
                    >
                      Sign Up
                    </motion.button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="inset-0 flex items-center justify-center select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[400px] min-h-[310px] py-5 px-8 rounded-2xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <X
                size={30}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 cursor-pointer transition-all duration-300"
                onClick={() => setIsShow(false)}
              />

              <h1 className="text-3xl font-bold text-center text-gray-800">
                Forgot Password?
              </h1>
              <p className="text-center mt-2 text-[#3f3f46] font-semibold">
                No worries. We'll send you reset instructions.
              </p>

              <form className="mt-5">
                <label className="text-[16px] font-semibold">Email</label>
                <input
                  type="email"
                  {...register("forgot", {
                    required: "This field is required",
                  })}
                  placeholder="Enter your email..."
                  className={`w-full mt-3 px-4 my-3 py-2 border rounded-md outline-none ${
                    errors.forgot ? "border-red-500" : "border-gray-400"
                  }`}
                />
              </form>
              <motion.button
                onClick={handleSubmit(handleForgotPassword)}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-2 bg-[#E92D28] mt-[5%] w-full rounded-md text-white text-[18px] font-bold cursor-pointer"
              >
                Reset Password
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignUp;
