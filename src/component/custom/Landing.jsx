import React, { useEffect } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import RecipeType from "../../Recipe/recipeType/RecipeType";
import HeroSection from "./HeroSection";
import NewRecipeTypes from "../../Recipe/newRecipe/NewRecipeTypes";
import Chefs from "./Chefs";
import Footer from "./Footer";
import AddSection from "./AddSection";

const Landing = () => {

  useEffect(()=>{
    scrollTo(0, 0);
  },[])
  return (
    <div className="px-4">
      <Header />
      <Carousel />
      <RecipeType />
      <HeroSection />
      <NewRecipeTypes />
      <AddSection/>
      <Chefs/>
      <Footer/>
    </div>
  );
};

export default Landing;
