import React from "react";
React;
const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
             
              CardTitle="Emergency Cases"
              CardDescription="We are glad to serve you Better Products with Best Quality From Orginal Industry."
            
             
            />
            <SingleCard
             
              CardTitle="Doctors Timetable"
              CardDescription="We are also hapy to help and debug ReactJs,NextJs and NodeJs Application."
            
            />
            <SingleCard
            
              CardTitle="Working Hours"
              CardDescription="We are also Glad to Give Headphone for better fucusing with straight Musics"
            
              
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({ CardDescription, CardTitle }) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h2>
            <p className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {CardTitle}
            </p>
          </h2>
          <h4 className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </h4>

        </div>
      </div>
      {/*  */}
    </>
  );
};
