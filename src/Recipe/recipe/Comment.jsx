import React from "react";

const Comment = () => {
  return (
    <div>
      <div className="w-full sm:w-full md:w-[60%] p-4 ms-[7%]">
        <h1 className="text-[22px] md:text-[28px] sm:text-[22px] font-bold mb-4">
          1 Commnets
        </h1>

        <div>
          <div className="flex justify-center items-center my-8">
            <div className="flex  flex-col sm:flex-col md:flex-row gap-5 sm:gap-5 md:gap-15">
              <div className="w-full sm:w-full justify-start sm:justify-start md:w-[10%] flex md:justify-center items-start mt-4">
                <img
                  src="/Comments/user.jpg"
                  className="h-[70px] w-[70px] rounded-full"
                />
              </div>
              <div className="flex w-[85%] flex-col mt-2 ">
                <div className="flex flex-col">
                  <span className="text-[20px] leading-[26px] text-[#3f3f46] font-bold">
                    Emily Carter
                  </span>
                  <span className="text-[14px] text-[#a1a1aa] leading-[19px] font-semibold ">
                    December 14, 2020
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-[16px] leading-[27px] text-[#3f3f46] text-justify ">
                    This recipe was a hit at our weekend barbecue! The chicken
                    was so tender and flavorful, and the marinade had just the
                    right amount of spice. The bell peppers and onions added a
                    nice crunch. Everyone loved it, and I’ll definitely be
                    making this again!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
