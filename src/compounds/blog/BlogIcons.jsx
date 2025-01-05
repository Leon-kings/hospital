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
              CardDescription="The availability of efficient and reliable ambulance services is crucial for ensuring the safety and well-being of residents and tourists alike."
              image="https://emahs.ae/wp-content/uploads/2024/08/emergency-ambulance.jpg"
            />
            <BlogCard
             
              CardTitle="PHARMACY"
              CardDescription="The field of pharmacy is inextricably linked to the broader healthcare system, but it faces its unique set of challenges that shape its current state and its trajectory for the future."
              image="https://img1.wsimg.com/isteam/ip/96f9481b-5f68-4e7a-99d1-1663b36826d6/2024-03-20_13-49-52_5182.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280"
            />
            <BlogCard
            
              CardTitle="TREATMENT AND CONSULTATION"
              CardDescription="Medical team performing operation. Group of surgeon at work in operating theatre toned in blue. Doctor operation in operation room at hospital concept for insurance advertising."
              image="https://cdn.britannica.com/78/240878-138-E9CB8517/How-Does-Anesthesia-Work.jpg?w=800&h=450&c=crop"
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
