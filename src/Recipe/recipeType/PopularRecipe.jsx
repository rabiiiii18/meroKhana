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

  useEffect(() => {
    fetch("/Object/recipe.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredRecipes = data.filter((recipe) => recipe.rating >= 4);
        setRecipe(filteredRecipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div>
      <div className=" mt-20">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          // navigation
          spaceBetween={1}
          slidesPerView={slidesPerView}
          watchOverflow={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              // spaceBetween: 10,
              // centeredSlides:true,
            },
            560: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            860: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1160: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1390: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          pagination={{ clickable: true }}
        >
          {recipe.map((recipe, index) => (
            <SwiperSlide key={index}>
              <Card recipe={recipe} onClick={() => {
                handleClick(recipe.title);
              }}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularRecipe;
