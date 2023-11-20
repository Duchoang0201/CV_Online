import React, { useEffect } from "react";

import { ScheduleOutlined } from "@ant-design/icons";
import AOS from "aos";

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const arrEdu = [
    {
      id: 1,
      iat: "November 1st 2023",
      exp: " April 18th 2023",
      college: "Aptech",
    },
    {
      id: 2,
      iat: "August 05th 2018",
      exp: "July 19th 2022",
      college: "Da Nang University ",
    },
  ];
  return (
    <div data-aos="fade-left">
      <div className="relative mb-5 ml-5 ">
        <h1 className="opacity-70 font-extrabold  text-2xl after:absolute after:w-[80%] after:bottom-0 after:left-0 after:bg-stone-500 after:h-1">
          Education
        </h1>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {arrEdu.map((item) => {
          return (
            <div key={item.college} className="relative">
              <li
                key={item.college}
                className="mb-10 ms-6  after:bg-green-900 after:right-0 after:-bottom-2  after:absolute after:h-1 after:w-0 after:hover:w-full after:duration-500 after:transition-all cursor-pointer"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <ScheduleOutlined />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {item.college}
                  {item.id === 1 && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  )}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.iat} - {item.exp}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Student
                </p>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default Education;
