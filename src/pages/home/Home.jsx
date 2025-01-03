import React from 'react'
React;
import Blog from "../../compounds/blog/BlogIcons";
import Count from "../../compounds/count/Count";
// import Card from '../../compounds/card/CardTimeTable';
import Slider from "../../compounds/slidebar/SliderHead";
import Contact from '../contact/Address';
import About1 from '../about/About';
import Head from '../../compounds/heading/Head';
import Carousel from '../../compounds/multislider/MultiSlider';
import Service from '../services/Services';
import Pricing from '../../compounds/pricing/Pricing';
import News from '../../compounds/news/MedicalNews';
import Appoint from '../../compounds/appointment/Appointment';
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
        <div className="contain ">
          <Contact/>
        </div>
        <div className="contain">
          <About1/>
        </div>
        <div className="contain ">
          <Head/>
        </div>
        <div className="contain flex">
          <Carousel/>
        </div>
        <div className="contain flex">
          <Service/>
        </div>
        <div className="contain flex">
          <Pricing/>
        </div>
        <div className="contain ">
          <News/>
        </div>
        <div className="contain ">
          <Appoint/>
        </div>
       
      </div>
    </>
  );
}
