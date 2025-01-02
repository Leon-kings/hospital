
// // import React from 'react';
// import { Autoplay, A11y} from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/controller';

//  const sells = [
//     { id:1,

       
//         inx:'This generation of the Toyota Carina E was produced by the Japanese manufacturer Toyota between 1992 - 1998. ',
//         URL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5xC7l1MPMk1D2hHH_5_xH-Nd5lsogHP_iw&s'
//       },

//       { id:3,
        
//         inx:'It is still early in the Range Rovers fifth generation, but already Land Rover has tweaked the powertrain lineup for 2024. The plug-in-hybrid P440e has been replaced with a more powerful P550e which makes 542 horsepower.',
//         URL:'https://media.post.rvohealth.io/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail-1-732x549.jpg'
//       }
//       ,
//       { id:4,
       
//         inx:'The 2024 Kia Sorento is the brands second-largest SUV, sitting just beneath the Telluride. Like the Telluride, the Sorento offers three rows of seating but in a slightly smaller and less expensive package',
//         URL:'https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg?w=400&h=300&c=crop'
//       }
//       ,
//       { id:5,
       
//         inx:'It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Seltos has a mileage of 17 to 20.7 kmpl . The Seltos is a 5 seater.',
//         URL:'https://www.umhs-sk.org/hubfs/Infectious%20disease%20doctor.jpeg'
//       } 
//       ,
//       { id:6,
       
//         inx:'The sixth-generation Chevrolet Camaro is an American pony car. ... Produced by automobile manufacturer Chevrolet, it was first introduced to the public on May 16, 2015',
//         URL:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=='
//       } 
     
//   ]

// const Slide = () => {

//     return (
//         <section className="w-full h-screen sm:w-full lg:w-full xl:w-full object-cover">
//         <Swiper
//           modules={[Autoplay, A11y]}
//           slidesPerView={1}
//           autoplay={{ delay: 5000 }}
//           className="w-full h-full"
//         >
//           {sells.map((slide, index) => (
//             <SwiperSlide key={index}>
//               {/* Background Image */}
//               <div
//                 className="relative w-full h-full bg-cover"
//                 style={{ backgroundImage: `url(${slide.URL})` }}
//               >
//                 {/* Overlay Content */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center text-white px-4">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//                       {slide.head}
//                     </h2>
//                     <p className="text-sm sm:text-base md:text-lg mt-4">
//                       {slide.inx}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//       );
// };

// export default Slide;
import { useState, useRef, useEffect } from 'react';

// Data
const data = [
  { id:1,

     
      inx:'This generation of the Toyota Carina E was produced by the Japanese manufacturer Toyota between 1992 - 1998. ',
      URL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5xC7l1MPMk1D2hHH_5_xH-Nd5lsogHP_iw&s'
    },

    { id:3,
      
      inx:'It is still early in the Range Rovers fifth generation, but already Land Rover has tweaked the powertrain lineup for 2024. The plug-in-hybrid P440e has been replaced with a more powerful P550e which makes 542 horsepower.',
      URL:'https://media.post.rvohealth.io/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail-1-732x549.jpg'
    }
    ,
    { id:4,
     
      inx:'The 2024 Kia Sorento is the brands second-largest SUV, sitting just beneath the Telluride. Like the Telluride, the Sorento offers three rows of seating but in a slightly smaller and less expensive package',
      URL:'https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg?w=400&h=300&c=crop'
    }
    ,
    { id:5,
     
      inx:'It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Seltos has a mileage of 17 to 20.7 kmpl . The Seltos is a 5 seater.',
      URL:'https://www.umhs-sk.org/hubfs/Infectious%20disease%20doctor.jpeg'
    } 
    ,
    { id:6,
     
      inx:'The sixth-generation Chevrolet Camaro is an American pony car. ... Produced by automobile manufacturer Chevrolet, it was first introduced to the public on May 16, 2015',
      URL:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=='
    } 
   
]

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto text-black">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Our epic carousel
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className=" relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.URL || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.inx}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

