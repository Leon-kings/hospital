// import React from 'react'

import Blog from "../../compounds/blog/BlogIcons";
import Count from "../../compounds/count/Count";

// import Slider from "../../compounds/slidebar/SliderHead";

export default function Home() {
  return (
    <>
    <div className="container justify-between items-center bg-white w-full xl:w-full lg:w-full sm:w-full">
      <div className="contain flex"></div>
      <div className="contain flex">
        <Blog/>
      </div>
      <div className="contain">
        <Count/>
      </div>
      <div className="contain flex"></div>
       
      {/* <Slider/> */}
    </div>
    </>
  )
}
