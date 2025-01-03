import React from 'react'
React;
import Blog from "../../compounds/blog/BlogIcons";
import Count from "../../compounds/count/Count";
// import Card from '../../compounds/card/CardTimeTable';
import Slider from "../../compounds/slidebar/SliderHead";
export default function Home() {
  return (
    <>
      <div className="container justify-between items-center bg-white w-full xl:w-full lg:w-full sm:w-full">
        <div className="contain w-full xl:w-full lg:w-full sm:w-fullw-full sm:w-full">
          <Slider/>
        </div>
        <div className="contain">
          <Blog />
        </div>
        <div className="contain">
          <Count />
        </div>
        <div className="contain flex">
           
        </div>
        <div className="contain flex"></div>
        <div className="contain flex"></div>
        <div className="contain flex"></div>
        <div className="contain flex"></div>
       
      </div>
    </>
  );
}
