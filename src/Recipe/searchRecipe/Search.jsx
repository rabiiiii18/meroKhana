import React, { useEffect, useState } from "react";
import Header from "../../component/custom/Header";
import useSearchStore from "../../zustand/SearchStore";
import Card from "../../component/custom/Card";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useSearchStore();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    fetch("Object/recipe.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    if (search) {
      const searchRecipe = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredRecipes(searchRecipe);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [search, recipes]);

  const handleClick = (name) => {
    const formattedName = encodeURIComponent(name.toLowerCase());
    navigate(`/recipe/${formattedName}`);
  };

  return (
    <div>
      <Header />
      <div
        className="h-[300px] flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: "url('/recipe-bg.svg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[45px] font-bold">Search Recipe for: {search}</h1>
      </div>

      <div className="mt-20 flex justify-between gap-10 flex-wrap px-[8%]">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="select-none max-w-[280px] h-[500px] relative cursor-pointer"
            >
              <Card
                recipe={recipe}
                onClick={() => {
                  handleClick(recipe.title);
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
