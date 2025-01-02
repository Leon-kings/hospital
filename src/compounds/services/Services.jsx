import React from 'react'
React;
import emergency from '../../assets/image/section-img.png'
export default function Services() {
  return (
    <>
    <div className='container sm:w-full lg:w-full xl:w-full bg-white justify-center items-center'>
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                 
                      <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                      We Offer Different Services To Improve Your Health
                      </h2>
                    <img src={emergency} alt="" className=" items-center px-32" />
                      <p className="text-base text-body-color dark:text-dark-6">
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                      </p>
                    </div>
    </div>
    </>
  )
}
