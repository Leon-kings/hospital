// import { useState, useRef, useEffect } from 'react';

// const data = [
//     {
//       "title": "Find me on Twitter",
//       "link": "https://twitter.com/kendalmintcode",
//       "imageUrl": "https://placeimg.com/300/300/any"
//     },
//     {
//       "title": "Welcome to Ark Labs",
//       "link": "https://ark-labs.co.uk",
//       "imageUrl": "https://obgyn-media.coloradowomenshealth.com/photos-doctors-in-surgery-400x267.jpg"
//     },
//     {
//       "title": "Some sort of third title",
//       "link": "https://twitter.com/kendalmintcode",
//       imageUrl: "https://obgyn-media.coloradowomenshealth.com/photos-doctors-in-surgery-400x267.jpg"
//     },

   

//     {
//       "title": "Super item number the last",
//       "link": "https://twitter.com/kendalmintcode",
//       imageUrl: "https://obgyn-media.coloradowomenshealth.com/photos-doctors-in-surgery-400x267.jpg"
//     },
//         {
//       "title": "Super item number the last",
//       "link": "https://twitter.com/kendalmintcode",
//       imageUrl: "https://obgyn-media.coloradowomenshealth.com/photos-doctors-in-surgery-400x267.jpg"
//     }
//   ]


// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//   };

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div className="carousel my-12 mx-auto">
//       <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2>
//       <div className="relative overflow-hidden">
//         <div className="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </button>
//         </div>
//         <div
//           ref={carousel}
//           className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {data.map((resource, index) => {
//             return (
//               <div
//                 key={index}
//                 className="carousel-item text-center relative w-64 h-64 snap-start"
//               >
             
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     className="w-full aspect-square hidden"
//                   />
              
              
//                   <h3 className="text-black py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
               
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React from 'react'
React;
export default function MultiSlider() {
  return (
    <div>
      
    </div>
  )
}
