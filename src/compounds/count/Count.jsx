// import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/outline";
// import { FaceSmileIcon, HomeModernIcon } from "@heroicons/react/24/solid";
// import React from "react";
// React;
// export default function Count() {
//   return (
//     <>
//       <div className="container flex justify-center items-center bg-blue-400 w-full xl:w-full lg:w-full sm:w-full rounded-md">
//         <div className="back mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           <div className="left">
//             <div className="grid grid-cols-2 gap-x-1">
//               <div className="menu">
//                 <HomeModernIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
//               </div>
//               <div className="menu">
//                 <h2 className="font-bold"> 3567</h2>
//                 <p>HOSPITAL ROOM</p>
//               </div>
//             </div>
//           </div>
//           <div className="left">
//             <div className="grid grid-cols-2 gap-x-2">
//               <div className="menu">
//                 <UserIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
//               </div>
//               <div className="menu">
//                 <h2 className="font-bold"> 356</h2>
//                 <p>SPECIALIST DOCTORS</p>
//               </div>
//             </div>
//           </div>
//           <div className="left">
//             <div className="grid grid-cols-2 gap-x-2">
//               <div className="menu">
//                 <FaceSmileIcon className="size-8 bg-white rounded-md hover:bg-white hover:text-blue-600" />
//               </div>
//               <div className="menu">
//                 <h2 className="font-bold"> 3567</h2>
//                 <p>HOSPITAL ROOM</p>
//               </div>
//             </div>
//           </div>
//           <div className="left">
//             <div className="grid grid-cols-2 gap-x-2">
//               <div className="menu">
//                 <CalendarDaysIcon className="size-8 bg-white hover:bg-white hover:text-blue-600" />
//               </div>
//               <div className="menu">
//                 <h2 className="font-bold"> 3567</h2>
//                 <p>HOSPITAL ROOM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";

// @material-tailwind/react
import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  CardBody,
} from "@material-tailwind/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export function KpiCard({
  title,
  percentage,
  number,
  color,
  icon,
}) {
  return (
    <Card className="shadow-sm border border-gray-200 bg-blue-300 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography
            className="!font-medium !text-xs text-gray-600"
          >
            <b>
            {title}
            </b>
          </Typography>
          <div className="flex items-center gap-1">
            {icon}
            <Typography
              color={color}
                className="font-medium !text-xs"
            >
              {percentage}
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="mt-1 font-bold text-2xl"
        >
          {number}
        </Typography>
      </CardBody>
    </Card>
  );
}

const data = [
  {
    title: "Visited",
    percentage: "12%",
    number: "846",
    color: "red",
    icon: (
      <ChevronDownIcon
        strokeWidth={4}
        className="w-3 h-3 text-red-500"
      />
    ),
  },
  {
    title: "Outbound Clicks",
    percentage: "16%",
    number: "10,342",
    color: "green",
    icon: (
      <ChevronUpIcon
        strokeWidth={4}
        className="w-3 h-3 text-green-500"
      />
    ),
  },
  {
    title: "Total Amount",
    percentage: "10%",
    number: "335$/Months",
    color: "green",
    icon: (
      <ChevronUpIcon
        strokeWidth={4}
        className="w-3 h-3 text-green-500"
      />
    ),
  },
  {
    title: "Event Count",
    percentage: "10%",
    number: "200",
    color: "red",
    icon: (
      <ChevronDownIcon
        strokeWidth={4}
        className="w-3 h-3 text-red-500"
      />
    ),
  },
];

function Count() {
  return (
    <section className="container mx-auto py-20 px-8 bg-blue-100 ">
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
        {data.map((props, key) => (
          <KpiCard key={key} {...(props)} />
        ))}
      </div>
    </section>
  );
}

export default Count;