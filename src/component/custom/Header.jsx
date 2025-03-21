import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, User, X } from "lucide-react";
import { nav } from "motion/react-client";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const[login,setLogin]=useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setLogin(true);
    }
  }, []);

  const handleClick = (event) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      event.preventDefault();
      toast.error("Please log in first!")
      navigate("/auth/signIn-Login"); 
    }
    else{
      navigate("/add-recipe")
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("authToken"); 
    setLogin(false); 
    toast.success("Logged Out successfully!");
    navigate('/')
    
  
  };

  const handleCheckk=()=>{
    const token = localStorage.getItem("authToken");
    if(!token){
      navigate("/auth/signIn-Login"); 
    }
    else{
      navigate("/profile")
    }

  }
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between items-center h-20 px-6 md:px-10">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="w-32 h-12 cursor-pointer"
          src="/public/logoo.png"
          alt="Logo"
        />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li className="relative"
              onMouseEnter={() => setDropdownOpen("recipes")}
              onMouseLeave={() => setDropdownOpen(null)}>
            <Link to="/recipe" className="text-gray-800 text-[17px] leading-[27px]  font-semibold  hover:bg-[#e92f281c] px-4 py-2 rounded-2xl hover:text-[#E92D28]">
              Recipes
            </Link>
            
          </li>
          <li className="relative"
              onMouseEnter={() => setDropdownOpen("categories")}
              onMouseLeave={() => setDropdownOpen(null)}>
            <Link className="text-gray-800 text-[17px] leading-[27px] font-semibold  hover:bg-[#e92f281c] px-4 py-2 rounded-2xl  hover:text-[#E92D28]">
              Categories
            </Link>
            {dropdownOpen === "categories" && (
              <div className="absolute left-0  w-48 bg-white shadow-lg z-1 rounded-md py-2">
                <Link to="/category1" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">Appertizers</Link>
                <Link to="/category2" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100 ">Drinks</Link>
                <Link to="/category1" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">Desserts</Link>
                <Link to="/category2" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">Healthy</Link>
                <Link to="/category1" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100 ">Meat</Link>
                <Link to="/category2" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100 ">Salads</Link>
                <Link to="/category2" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">Soups</Link>

              </div> 
            )}
          </li>
          <li>
            <Link to="#blogs" className="text-gray-800 text-[17px] leading-[27px]  font-semibold  hover:bg-[#e92f281c] px-4 py-2 rounded-2xl  hover:text-[#E92D28]">
              Blogs
            </Link>
          </li>
          <li className="relative"
          onMouseEnter={() => setDropdownOpen("features")}
          onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link to="#features" className="text-gray-800  text-[17px] leading-[27px] font-semibold  hover:bg-[#e92f281c] px-4 py-2 rounded-2xl  hover:text-[#E92D28]">
              Features
            </Link>
            {dropdownOpen === "features" && (
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-1.5 z-1">
                <Link to="/about-us" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">About Us</Link>
                <Link to="/contact-us" className="block px-4 py-2 text-gray-800 font-bold hover:text-[#E92D28] hover:bg-gray-100">Contact Us</Link>
              </div>
            )}
          </li>
        </ul>
        
        {/* Sign In Button */}
        <div className="hidden md:flex">
          <Link
          onClick={handleCheckk}
            
            className="px-2 py-2 mr-2  transition-transform duration-300 hover:scale-110  hover:text-[#E92D28] "
          >
            <User size={25} /> 
          </Link>

         {
          login ?(
            <Link
            onClick={handleSignOut}
              className="px-2 py-2 mr-2  transition-transform duration-300 hover:scale-110  hover:text-[#E92D28] "
            >
              <LogOut size={25} /> 
            </Link>
          ):(
            ""
          )
         }

          <Link
            onClick={handleClick}
            className="px-4 py-3 text-[14px] leading-[20px] bg-gray-300 text-black font-semibold rounded-md transition-transform duration-300 hover:scale-110 hover:bg-[#E92D28] hover:text-white"
          >
            Add recipe
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 text-center">
          <Link to="#templates" className="block text-gray-800 font-semibold text-lg hover:text-[#E92D28]">
            Recipes
          </Link>
          <Link to="#categories" className="block text-gray-800 font-semibold text-lg hover:text-[#E92D28]">
            Categories
          </Link>
          <Link to="#blogs" className="block text-gray-800 font-semibold text-lg hover:text-[#E92D28]">
            Blogs
          </Link>
          <Link to="#features" className="block text-gray-800 font-semibold text-lg hover:text-[#E92D28]">
            Features
          </Link>
          <Link
            to="/auth/signIn-Login"
            className="block px-4 py-2 bg-gray-300 text-black font-semibold rounded-md transition-transform duration-300 hover:scale-105 hover:bg-[#E92D28] hover:text-white"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
