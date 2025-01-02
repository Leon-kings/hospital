import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import React from "react";
React;
export default function Count() {
  return (
    <>
      <div className="container flex justify-center items-center bg-blue-400 w-full xl:w-full lg:w-full sm:w-full rounded-md">
        <div className="back mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="left">
            <div className="grid grid-cols-2 gap-x-1">
              <div className="menu">
                <HomeModernIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
              </div>
              <div className="menu">
                <h2 className="font-bold"> 3567</h2>
                <p>HOSPITAL ROOM</p>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="grid grid-cols-2 gap-x-2">
              <div className="menu">
                <UserIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
              </div>
              <div className="menu">
                <h2 className="font-bold"> 356</h2>
                <p>SPECIALIST DOCTORS</p>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="grid grid-cols-2 gap-x-2">
              <div className="menu">
                <FaceSmileIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
              </div>
              <div className="menu">
                <h2 className="font-bold"> 3567</h2>
                <p>HOSPITAL ROOM</p>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="grid grid-cols-2 gap-x-2">
              <div className="menu">
                <CalendarDaysIcon className="size-8 bg-white hover:bg-white hover:text-blue-600" />
              </div>
              <div className="menu">
                <h2 className="font-bold"> 3567</h2>
                <p>HOSPITAL ROOM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
