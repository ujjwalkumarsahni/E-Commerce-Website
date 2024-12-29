import React from "react";
import BannerSlider from "../Slider/BannerSlider";
import "./Home.css";
import MultiCursorProduct from "../Slider/MultiCoursorProduct";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      {/* <BannerSliderEffect /> */}
      <BannerSlider />
      <MultiCursorProduct title="Top Best Product"/>
      <MultiCursorProduct title="Top Best Laptop" category="laptops"/>
      <MultiCursorProduct title="Best of Beauty" category="beauty" />
      <MultiCursorProduct title="Best of Tops" category="tops" />
      <MultiCursorProduct title="Best of Furniture" category="furniture" />
      <MultiCursorProduct title="Best of Groceries" category="groceries" />

      <Footer />
    </>
  );
};

export default Home;
