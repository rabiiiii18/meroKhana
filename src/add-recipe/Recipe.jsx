import React, { useEffect, useState } from "react";
import Header from "../../component/custom/Header";
import Directions from "./Directions";
import Comment from "./Comment";
import LeaveComment from "./LeaveComment";
import Footer from "../../component/custom/Footer";

const Recipe = () => {
  const ingredients = [
    { quantity: "500 grams", name: "Chicken" },
    { quantity: "2 pieces", name: "Lemon" },
    { quantity: "3 tsp", name: "Olive Oil" },
    { quantity: "4 cloves", name: "Garlic" },
    { quantity: "1/2 tsp", name: "Black Pepper" },
    { quantity: "1 piece", name: "Chili Pepper" },
  ];
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
      <div>
        <Header />
        <div className="h-[100vh]">
          <div className="bg-gray-100 h-[260px] w-full relative flex justify-center select-none ">
            <div className=" h-auto  absolute w-[90%] mt-[4%] rounded-2xl">
              <div className="flex justify-between gap-20 p-3">
                <div className="w-[40%] h-auto">
                  <img
                    src="/recipe-4.jpg"
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="w-[60%] rounded-2xl h-auto">
                  <div className="flex flex-col px-4">
                    <span className="text-[18px] font-semibold text-[#E92D28] leading-[40px]">
                      Soups
                    </span>
                    <span className="text-[35px] leading-[42px] font-semibold">
                      Vegetable Lentil Stew with Fresh Herbs
                    </span>
                  </div>
                  <div className="flex justify-between px-5 mt-8 ">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex gap-2 justify-center items-center">
                        <svg
                          fill="#000000"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M12,6 C12.5128358,6 12.9355072,6.38604019 12.9932723,6.88337887 L13,7 L13,11.5857864 L14.7071068,13.2928932 C15.0976311,13.6834175 15.0976311,14.3165825 14.7071068,14.7071068 C14.3466228,15.0675907 13.7793918,15.0953203 13.3871006,14.7902954 L13.2928932,14.7071068 L11.2928932,12.7071068 C11.1366129,12.5508265 11.0374017,12.3481451 11.0086724,12.131444 L11,12 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"
                          />
                        </svg>
                        <span className="text-[16px] font-bold leading-[16px]">
                          32min
                        </span>
                      </div>
                      <span className="text-[13px] leading-[13px] font-semibold text-[#a1a1aa]  ">
                        Cooking Time
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex gap-2 justify-center items-center">
                        <svg
                          fill="#000000"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z" />
                        </svg>
                        <span className="text-[16px] font-bold leading-[16px]">
                          Neplease
                        </span>
                      </div>
                      <span className="text-[13px] leading-[13px] font-semibold text-[#a1a1aa]">
                        Cuisine
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex gap-2 justify-center items-center">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 1024 1024"
                          class="icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M256 410.304V96a32 32 0 0164 0v314.304a96 96 0 0064-90.56V96a32 32 0 0164 0v223.744a160 160 0 01-128 156.8V928a32 32 0 11-64 0V476.544a160 160 0 01-128-156.8V96a32 32 0 0164 0v223.744a96 96 0 0064 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 11-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
                          />
                        </svg>
                        <span className="text-[16px] font-bold leading-[16px]">
                          1 Person
                        </span>
                      </div>
                      <span className="text-[13px] leading-[13px] font-semibold text-[#a1a1aa]">
                        Serving
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="flex gap-2 justify-center items-center">
                        <svg
                          fill="#000000"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.828,5H16.9A5,5,0,0,0,7.1,5H6.171A5.132,5.132,0,0,0,1.023,9.513a5.063,5.063,0,0,0,1.823,4.369C4.556,15.328,5.6,16.213,6,18.121V22a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18.121c.405-1.908,1.445-2.794,3.228-4.3a5.015,5.015,0,0,0,1.749-4.3A5.132,5.132,0,0,0,17.828,5ZM16,21H8V19h8Zm3.862-8.646c-1.653,1.4-3,2.534-3.641,4.646H7.779c-.647-2.113-2-3.255-3.716-4.709A2.976,2.976,0,0,1,3.013,9.7,3.119,3.119,0,0,1,6.171,7H8A1,1,0,0,0,9,6a3,3,0,0,1,6,0,1,1,0,0,0,1,1h1.828a3.119,3.119,0,0,1,3.159,2.7A3.024,3.024,0,0,1,19.862,12.354ZM13,9v5a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Zm4,1v3a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0ZM9,10v3a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Z" />
                        </svg>
                        <span className="text-[16px] font-bold leading-[16px]">
                          Easy
                        </span>
                      </div>
                      <span className="text-[13px] leading-[13px] font-semibold text-[#a1a1aa]">
                        Difficulty Level
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center pt-4">
                    <div className="flex justify-center items-center gap-6 ">
                      <div className="flex justify-center items-center">
                        <img
                          src="/user.jpg"
                          className="w-[70px] rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[16px] leading-[22px] font-semibold">
                          Oliver Spray
                        </span>
                        <span className="text-[14px] leading-[16px] text-[#a1a1aa] font-semibold">
                          Recipe Author
                        </span>
                      </div>
                    </div>
                    <div className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-[#E92D28] group">
                      <svg
                        className="w-[25px] h-[25px] fill-red group-hover:fill-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM19,6H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18h1a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM8,4h8V6H8Zm8,16H8V16h8Zm4-5a1,1,0,0,1-1,1H18V15a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow border-t border-gray-300 mt-8"></div>
                  <div className="mt-4 select-none">
                    <div className="text-[20px] leading-[31px] text-[#a1a1aa] font-semibold flex gap-4">
                      Ingredients{" "}
                      <span className="text-black text-[20px]">
                        {count} Person(s)
                      </span>
                      <div className="flex  gap-2 justify-center items-center">
                        <div
                          onClick={() => {
                            setCount(count + 1);
                          }}
                          className="rounded-sm  h-[25px] w-[25px] border flex justify-center items-center cursor-pointer"
                        >
                          <svg
                            fill="#000000"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            id="plus"
                            data-name="Flat Color"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon flat-color"
                          >
                            <path
                              id="primary"
                              d="M12,20a1,1,0,0,1-1-1V13H5a1,1,0,0,1,0-2h6V5a1,1,0,0,1,2,0v6h6a1,1,0,0,1,0,2H13v6A1,1,0,0,1,12,20Z"
                            ></path>
                          </svg>
                        </div>
                        <div
                          onClick={() => {
                            if (count > 0) {
                              setCount(count - 1);
                            }
                          }}
                          className={`rounded-sm h-[25px] w-[25px] border flex justify-center items-center cursor-pointer
                        }`}
                        >
                          <svg
                            fill="#000000"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            id="minus"
                            data-name="Flat Color"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon flat-color"
                          >
                            <path
                              id="primary"
                              d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 h-[250px] overflow-hidden select-none">
                      <div className="grid grid-cols-3 gap-6 max-w-auto max-h-[250px] overflow-y-auto">
                        {ingredients.map((item, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 accent-red-500 cursor-pointer"
                            />
                            <span className="font-semibold">
                              {item.quantity}
                            </span>
                            <span className="text-gray-600">{item.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Directions/>
        <Comment/>
        <LeaveComment/>
        <Footer/>
      </div>
    </div>
  );
};

export default Recipe;
