import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Homecard from "../components/Homecard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarouselData } from '../data/redux/actions';
import Footer from "../components/Footer";



function Home() {
  console.log("Home page render ======");

  const dispatch = useDispatch();
  const carouselData = useSelector((state) => state.main.carousel.carouselData);

  if (!carouselData.length) {
    dispatch(fetchCarouselData());
  }
  
  return (
    <>
      <Navbar />
      <Carousel data={carouselData} />
      <Homecard data={{limit: 24,columns: "B-C",}}/>
      <Footer />
    </>
  );
}


export default Home;
