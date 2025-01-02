
// import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

 const sells = [
    { id:1,

       
        inx:'This generation of the Toyota Carina E was produced by the Japanese manufacturer Toyota between 1992 - 1998. ',
        URL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5xC7l1MPMk1D2hHH_5_xH-Nd5lsogHP_iw&s'
      },

      { id:3,
        // head:'Range Rover 2024 | Luxury Performance SUV',
        // capacity:'The 2024 Range Rover Sport SV covers zero to 60 mph in 3.6 seconds on its way to 180 mph.',
        inx:'It is still early in the Range Rovers fifth generation, but already Land Rover has tweaked the powertrain lineup for 2024. The plug-in-hybrid P440e has been replaced with a more powerful P550e which makes 542 horsepower.',
        URL:'https://media.post.rvohealth.io/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail-1-732x549.jpg'
      }
      ,
      { id:4,
        // head:'Kia Sorento',
        // capacity:'Capabilities and Comfort. 2.5L 4-Cylinder Engine w/ 191 hp & 181 lb.-ft. of torque. 8-Speed Auto Transmission ; Convenience and Innovation',
        inx:'The 2024 Kia Sorento is the brands second-largest SUV, sitting just beneath the Telluride. Like the Telluride, the Sorento offers three rows of seating but in a slightly smaller and less expensive package',
        URL:'https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg?w=400&h=300&c=crop'
      }
      ,
      { id:5,
        // head:' Kia Seltos 5-door SUV',
        // capacity:'Front-engine, front-wheel-drive Front-engine, all-wheel-drive (SP2 only). The Diesel engine is 1497 cc and 1493 cc while the Petrol engine is 1497 cc and 1482 cc ',
        inx:'It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Seltos has a mileage of 17 to 20.7 kmpl . The Seltos is a 5 seater.',
        URL:'https://www.umhs-sk.org/hubfs/Infectious%20disease%20doctor.jpeg'
      } 
      ,
      { id:6,
        // head:' Chevrolet Camaro WMV20',
        // capacity:'Chevrolet reports the SS capable of 455 horsepower (339 kW; 461 PS) and 455 lb⋅ft (617 N⋅m; 63 kg⋅m) of torque, performing 0-60 mph (97 km/h) in 4.0 seconds.',
        inx:'The sixth-generation Chevrolet Camaro is an American pony car. ... Produced by automobile manufacturer Chevrolet, it was first introduced to the public on May 16, 2015',
        URL:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=='
      } 
     
  ]

const Slide = () => {

    return (
        <section className="w-full h-screen sm:w-full lg:w-full xl:w-full object-cover">
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          className="w-full h-full"
        >
          {sells.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div
                className="relative w-full h-full bg-cover"
                style={{ backgroundImage: `url(${slide.URL})` }}
              >
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {slide.head}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mt-4">
                      {slide.inx}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      );
};

export default Slide;


