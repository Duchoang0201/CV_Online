import React, { useEffect } from "react";
import { FormOutlined } from "@ant-design/icons";
import AOS from "aos";

function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const arrWork = [
    {
      id: 1,
      iat: "June 3rd 2023",
      exp: "Current",
      company: "Wiicamp Company",
      position: "Fullstack developer",
    },
    {
      id: 2,
      iat: "March 2nd 2023",
      exp: "May 15th 2023",
      company: "Softech Company",
      position: "Internship",
    },
    {
      id: 3,
      iat: "May 10th 2022",
      exp: "November 6th 2023",
      company: "Atax Company",
      position: "Auditor assitant",
    },
  ];
  return (
    <div data-aos="fade-right">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {arrWork.map((item) => {
          return (
            <li key={item.company} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FormOutlined />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.company}
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
                {item.position}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default WorkExperience;
