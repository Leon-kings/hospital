// src/components/GridSlider.jsx
import React from "react";
React;
const images = [
  "https://images.squarespace-cdn.com/content/v1/5601a1b2e4b0eaa138babe0c/1500860972078-4QWM119B45LP5RM3UZZ8/surgicalteam.jpg?format=1500w",
  "https://media.istockphoto.com/id/501707098/photo/surgeons-operating-on-patient-in-operating-theatre-under-lights.jpg?s=612x612&w=0&k=20&c=aCNe7gIVCrm5wyvd5OA1ewW1h50yIIT7Tgndrd-0ml0=",
  "https://www.healthstaffrecruitment.com.au/wp-content/uploads/2018/12/bigstock-female-surgeon-with-her-surgic-17339630.jpg",
  "https://img.freepik.com/premium-photo/doctor-uniform-operating-patient-group-medical-team-urgently-doing-surgical-operation_116317-23372.jpg",
  "https://i0.wp.com/aestheticmedicalpractitioner.com.au/wp-content/uploads/2023/01/Surgeons-at-work.jpg?fit=1920%2C1080&ssl=1",
  "https://www.shutterstock.com/image-photo/two-surgeons-observing-highprecision-programmable-260nw-2324465547.jpg",
  "https://www.neovisioneyecenters.com/wp-content/uploads/2020/10/neovision-october-2020-1-jpg.webp",
  "https://assets.bva20-20.com/Images/Sites/V/VIP-BVA/1411061.png?crop=(0.00,96.90,%202000.00,1221.90)&srotate=0",
  "https://www.tlccoralgables.com/wp-content/uploads/sites/131/2021/12/iStock-1305313838-1024x683.jpg.webp",
  "https://images.squarespace-cdn.com/content/v1/5601a1b2e4b0eaa138babe0c/1500860972078-4QWM119B45LP5RM3UZZ8/surgicalteam.jpg?format=1500w",
  "https://media.istockphoto.com/id/501707098/photo/surgeons-operating-on-patient-in-operating-theatre-under-lights.jpg?s=612x612&w=0&k=20&c=aCNe7gIVCrm5wyvd5OA1ewW1h50yIIT7Tgndrd-0ml0=",
  "https://www.healthstaffrecruitment.com.au/wp-content/uploads/2018/12/bigstock-female-surgeon-with-her-surgic-17339630.jpg",
  "https://img.freepik.com/premium-photo/doctor-uniform-operating-patient-group-medical-team-urgently-doing-surgical-operation_116317-23372.jpg",
  "https://i0.wp.com/aestheticmedicalpractitioner.com.au/wp-content/uploads/2023/01/Surgeons-at-work.jpg?fit=1920%2C1080&ssl=1",
  "https://www.shutterstock.com/image-photo/two-surgeons-observing-highprecision-programmable-260nw-2324465547.jpg",
  "https://www.neovisioneyecenters.com/wp-content/uploads/2020/10/neovision-october-2020-1-jpg.webp",
  "https://assets.bva20-20.com/Images/Sites/V/VIP-BVA/1411061.png?crop=(0.00,96.90,%202000.00,1221.90)&srotate=0",
  "https://www.tlccoralgables.com/wp-content/uploads/sites/131/2021/12/iStock-1305313838-1024x683.jpg.webp",
];

const GridSlider = () => {
  const imagesPerSlide = 6; // Number of images to show per slide (e.g., 2x3 grid)

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  return (
    <div className="relative overflow-hidden w-full sm:w-full md:w-full lg:w-full xl:w-full mx-auto">
      <div
        className="flex transition-transform duration-500"
      >
        {Array(totalSlides)
          .fill()
          .map((_, slideIndex) => (
            <div key={slideIndex} className="grid grid-cols-3 gap-4 w-full p-4">
              {images
                .slice(
                  slideIndex * imagesPerSlide,
                  slideIndex * imagesPerSlide + imagesPerSlide
                )
                .map((image, index) => (
                  <div key={index} className="border rounded overflow-hidden">
                    <img
                      src={image}
                      alt={`Image ${slideIndex * imagesPerSlide + index + 1}`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridSlider;
