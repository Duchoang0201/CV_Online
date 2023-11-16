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
      iat: "June 3rd 2023",
      exp: "Current",
      college: "Da Nang University ",
    },
    {
      id: 2,
      iat: "March 2nd 2023",
      exp: "May 15th 2023",
      college: "Aptech",
    },
  ];
  return (
    <div data-aos="fade-left">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {arrEdu.map((item) => {
          return (
            <li key={item.college} className="mb-10 ms-6">
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
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Education;
