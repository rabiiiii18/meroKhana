import React, { useEffect, useState } from "react";
import Header from "../../component/custom/Header";
import Footer from "../../component/custom/Footer";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../../component/custom/Card";
import { div } from "motion/react-client";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const[category,setCategory]=useState([])
  const recipesPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    scrollTo(0, 0);
    fetch("/Object/recipe.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data)
        setCategory([...new Set(data.map(item => item.category))])
      })
      .catch((error) => console.error("error", error));
  }, []);

  const handleClick = (name) => {
    const formattedName = encodeURIComponent(name.toLowerCase());
    navigate(`/recipe/${formattedName}`);
  };



  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const paginatedRecipes = filteredRecipes.slice(
    startIndex,
    startIndex + recipesPerPage
  );


  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      scrollTo(0, 0); 
    }
  };

  return (
    <div className="px-4">
      <Header />
      <div>
        <div
          className="h-[250px] sm:h-[250px] md:h-[300px] flex flex-col justify-center items-center bg-gray-100"
          style={{
            backgroundImage: "url('/recipe-bg.svg')",
            objectFit: "cover",
          }}
        >
          <h1 className="text-[30px] sm:text-[30px] md:text-[45px] font-bold">All Recipes</h1>
          <p className="text-center w-full md:w-[60%] sm:w-full mt-5">
            Browse a wide variety of recipes designed for every taste and skill
            level. From comforting classics to creative culinary delights, find
            the perfect dish to inspire your next meal!
          </p>
        </div>


        <div className="flex justify-center items-center">
          <div className="mt-13 flex items-center w-full sm:w-full md:w-[50%] relative">
            <input
              type="text"
              className="px-3 py-2 sm:px-3 sm:py-2 md:py-4 md:px-5 text-[18px] rounded-2xl bg-gray-100 outline-1 w-full"
              placeholder="Keywords..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Search className="px-2 py-2 bg-[#E92D28] text-white rounded-xl w-[35px] h-[35px]  md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] absolute right-4 cursor-pointer" />
          </div>
        </div>


        <div className="mt-20 flex justify-between items-center gap-8 flex-wrap px-[8%] ">
          {paginatedRecipes.length > 0 ? (
            paginatedRecipes.map((recipe, index) => (
              <div
                key={index}
                className="select-none w-full sm:w-full md:w-[280px] h-[500px] relative cursor-pointer"
              >
                <Card
                  recipe={recipe}
                  onClick={() => handleClick(recipe.title)}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">
              No recipes found.
            </p>
          )}
        </div>


        {totalPages > 1 && (
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#E92D28] text-white"
                }`}
              >
                Prev
              </button>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#E92D28] text-white"
                }`}
              >
                Next
              </button>
            </div>
            
            <p className="px-4 py-2 mt-4">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllRecipe;
