{
  /* <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" className="dark:hidden h-[426px] md:h-[654px]" alt=""/>
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" className="hidden dark:block h-[426px] md:h-[654px]" alt=""/>
    </div>
</div> */
}

import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";

const Slider = () => {
  const images = [
    {
      id: 1,
      url: "https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg",
    },

    {
      id: 2,
      url: "https://cdn.prod.website-files.com/62d4f06f9c1357a606c3b7ef/65ddf3cdf19abaf5688af2f8_shutterstock_1933145801%20(1).jpg",
    },
    {
      id: 3,
      url: "https://hips.hearstapps.com/hmg-prod/images/the-good-doctor-operating-room-1588791591.jpg",
    },
  ];

  return (
    <section className="w-full object-cover">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30} // Adjust the spacing as needed
        slidesPerView={1} // Show only one slide by default
        autoplay
        className="w-full xl:w-[100%] mx-auto lg:w-full md:w-full sm:w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div className="absolute w-full overflow-hidden blur-1xl">
              <img
                src={img.url}
                alt={`slide-${index + 1}`}
                className="w-full object-cover h-[300px] xl:w-full lg:w-full md:w-full sm:h-[400px] sm:w-[100%] lg:h-[500px] xl:h-[600px]  select-none"
              />
            </div>

            {/* Content Section */}
            <div className="relative isolate  sm:px-6 w-full">
              <div className="py-20 sm:py-32 lg:py-40 xl:py-48">
                <div className="my-10 text-center">
                  <h2 className=" text-sm sm:text-lg lg:text-xl xl:text-2xl font-medium text-pretty text-white">
                    Leon is happy to serve you your favorite computers. Choose
                    the best PC and also find repair kits if needed.
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
