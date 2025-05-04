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



const LatestRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const slidesPerView = Math.min(recipe.length, 5);
  const navigate = useNavigate();
  const handleClick = (name) => {
    const formattedName = encodeURIComponent(name.toLowerCase()); // Format URL
    navigate(`/recipe/${formattedName}`);
  };

  useEffect(() => {
    fetch("/Object/recipe.json")
      .then((res) => res.json())
      .then((data) => {
        const latest = data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        const latestRecipe=latest.slice(0,10)
        setRecipe(latestRecipe);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  });

  return (
    <div>
      <div className=" mt-20 flex gap-10 overflow-x-auto" >
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

export default LatestRecipe;
