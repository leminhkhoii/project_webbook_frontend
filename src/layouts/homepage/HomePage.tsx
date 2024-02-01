import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import ListOfProduct from "../product/ListOfProduct";

interface HomePageProps{
  wordForSearch: string;
}

function HomePage({wordForSearch}: HomePageProps){

  return(
    <div>
      <Banner></Banner>
      <Carousel></Carousel>
      <ListOfProduct wordForSearch={wordForSearch}/>
    </div>
  )
}

export default HomePage;