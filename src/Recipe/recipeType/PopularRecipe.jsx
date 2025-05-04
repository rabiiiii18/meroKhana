import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import Card from "../../component/custom/Card";

const PopularRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const slidesPerView = Math.min(recipe.length, 5);
  const navigate = useNavigate();

  
  const handleClick = (name) => {
    const formattedName = encodeURIComponent(name.toLowerCase()); // Format URL
    navigate(`/recipe/${formattedName}`);
  };

  // useEffect(() => {
  //   fetch("/Object/recipe.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filteredRecipes = data.filter((recipe) => recipe.rating >= 4);
  //       setRecipe(filteredRecipes);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching recipes:", error);
  //     });
  // }, []);

  return (
    <div>
      <div className="lg:mt-18 mt-5 flex gap-8 overflow-x-auto" >
          {recipe.map((recipe, index) => (
            <div key={index}>
              <Card recipe={recipe} onClick={() => {
                handleClick(recipe.title);
              }}/>
            </div>
          ))}
       
      </div>
    </div>
  );
};

export default PopularRecipe;
