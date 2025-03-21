import React from 'react'
import Header from '../../component/custom/Header'


const images = [
    { id: 1, src: "/recipe-2-.jpg" },
    { id: 2, src: "/recipe-2-.jpg" },
    { id: 3, src: "/recipe-2-.jpg" },
    { id: 1, src: "/recipe-2-.jpg" },
    { id: 2, src: "/recipe-2-.jpg" },
    { id: 2, src: "/recipe-2-.jpg" },

];
const RecipeCategory = () => {
    return (
        <div>
            <Header />
            <div
                className="h-[300px] flex flex-col justify-center items-center bg-gray-100"
                style={{
                    backgroundImage: "url('/recipe-bg.svg')",
                    objectFit: "cover"
                }}
            >
                <h1 className='text-[45px] font-bold'>Breads</h1>
                <p className='text-center text-[16px] leading-[27px] text-[#3f3f46] w-[60%] mt-5'>Explore homemade bread recipes, including crusty loaves, soft rolls, flatbreads, and quick breads, perfect for pairing with meals or enjoying as a delicious snack.</p>
                <span className='px-4 py-1.5 text-[12px] leading-[17px] text-[#3f3f46] outline-1 mt-5 rounded-3xl'> Total4 Recipes</span>
            </div>
            <div className='mt-20 flex justify-around gap-10 flex-wrap px-[5%]'>
                    {
                        images.map((img) => (
                            <div
                                key={img.id}
                                className="select-none max-w-[280px] h-[500px]  relative cursor-pointer mb-5"
                                onClick={() => {
                                    navigate("/recipe/Recipe");
                                }}
                            >

                                <div className=" absolute  top-3 left-3 flex gap-2 bg-white w-[65px] px-2 py-1 rounded-2xl select-none">
                                    <span>
                                        <img src="/star.png" className="w-[25px]" />
                                    </span>
                                    <span className="text-[15px] font-bold">4.5</span>
                                </div>
                                <div className="absolute left-55 top-3 flex justify-center items-center flex-col gap-3 cursor-pointer ">
                                    <span className="bg-white p-2 flex justify-center items-center rounded-full text-[#E92D28] hover:bg-[#E92D28] hover:text-white">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 20 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.8333 10.1667C17.075 8.95 18.3333 7.49167 18.3333 5.58333C18.3333 4.36776 17.8504 3.20197 16.9909 2.34243C16.1314 1.48289 14.9656 1 13.75 1C12.2833 1 11.25 1.41667 9.99999 2.66667C8.74999 1.41667 7.71666 1 6.24999 1C5.03441 1 3.86863 1.48289 3.00908 2.34243C2.14954 3.20197 1.66666 4.36776 1.66666 5.58333C1.66666 7.5 2.91666 8.95833 4.16666 10.1667L9.99999 16L15.8333 10.1667Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="bg-white p-2 flex justify-center items-center rounded-full text-[#E92D28] hover:bg-[#E92D28]  hover:text-white">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 16 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 19L8 15L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="w-[270px] h-[500px] rounded-xl cursor-pointer ">
                                    <img src='/recipe-2-.jpg' className="w-[280px] h-[300px] rounded-xl" />
                                    <div className="mt-3">
                                        <span className="font-bold text-[20px] text-[#E92D28]">Pasta</span>
                                        <h1 className="font-bold text-[20px] hover:text-[#E92D28]">
                                            Creamy Garlic Mushroom Penne Pasta
                                        </h1>
                                    </div>
                                    <div className="flex gap-[18%] items-center mt-3">
                                        <div className="flex gap-[10px] items-center">
                                            <span>
                                                <img src="./time.png" className="w-[20px]" />
                                            </span>
                                            <span className="text-gray-500 font-semibold">5 min</span>
                                        </div>
                                        <div className="flex gap-[10px] items-center">
                                            <span>
                                                <img src="./nepal.png" className="w-[20px]" />
                                            </span>
                                            <span className="text-gray-500 font-semibold">Nepal</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-[10px] items-center mt-2">
                                        <span>
                                            <img src="/chef.png" className="w-[20px]" />
                                        </span>
                                        <span className="text-gray-500 font-semibold">Beginner</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

        </div>
    )
}

export default RecipeCategory
