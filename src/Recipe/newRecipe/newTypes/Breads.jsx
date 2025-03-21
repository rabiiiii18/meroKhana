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
import Card from "../../../component/custom/Card";
import { useAsyncValue, useNavigate } from "react-router-dom";

const Breads = () => {
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
        const category = data.filter(
          (recipe) => recipe.category === "Side Dish"
        );
        setRecipe(category);
      })
      .catch((error) => console.error("error", error));
  });
  return (
    <div>
      {" "}
      <div>
        <div className=" mt-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={slidesPerView}
            watchOverflow={true}
            //   autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //   }}
            pagination={{ clickable: true }}
          >
            {recipe.map((recipe, index) => (
              <SwiperSlide key={index}>
                <Card
                  recipe={recipe}
                  onClick={() => {
                    handleClick(recipe.title);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Breads;
