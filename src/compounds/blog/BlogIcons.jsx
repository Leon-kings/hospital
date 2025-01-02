import React from "react";
React;
import emergency from '../../assets/image/section-img.png'
const Blog = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 w-full xl:w-full dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
           
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                We Are Always Ready to Help You & Your Family
                </h2>
              <img src={emergency} alt="" className=" items-center px-32" />
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
             
              CardTitle="EMERGENCY"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZk2-88VC4Zh0ZNU3jFL2_0B8FaQs8kXkTc5GvwsqfrRQ_mtriwTeOS5ExYIUORTasuZ0&usqp=CAU"
            />
            <BlogCard
             
              CardTitle="PHARMACY"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mZshXdfbdTXdqrwshENauZ8TUUXB8x1WUw&s"
            />
            <BlogCard
            
              CardTitle="TREATMENT AND CONSULTATION"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyzTsChZZVdMxRU4ZqLQIyvSwFgdUQ7xDAg&s"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            <h3 className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {CardTitle}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
