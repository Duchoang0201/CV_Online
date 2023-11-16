import Image from "next/image";
import React from "react";

import { InfoCircleOutlined } from "@ant-design/icons";

import avatar from "../../public/images/Avatar/AVATAR.jpg";

const infoArr = [
  { type: "Name", context: "Nguyễn Bá Đức Hoàng" },
  { type: "Birthday", context: "January 2nd 2000" },
  { type: "Job", context: "Fullstack(React.js, Next.js, Node.js)" },
  { type: "Email", context: "Duchoang020120@gmail.com" },
  { type: "Phone", context: "0913599444" },
];
function Info() {
  return (
    <div className="bg-white dark:bg-slate-800  shadow-2xl transition-colors duration-500">
      <div
        className=" text-whiterounded-lg flex justify-center"
        data-aos="zoom-out"
      >
        <Image src={avatar} alt={avatar.src} className="w-2/3 h-2/3" />
      </div>
      <div className="pl-8">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-slate-800 rounded-full -start-[5.8px] ring-4 ring-slate-400 ">
              <InfoCircleOutlined className="text-[16px] text-white" />
            </span>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Information
            </time>
            <div className="flex flex-col gap-3 py-2">
              {infoArr.map((item, index) => {
                return (
                  <h3
                    key={item.type}
                    data-aos="fade-right"
                    data-aos-delay={(index + 1) * 50}
                    className="text-xs font-semibold text-gray-900 dark:text-white"
                  >
                    <span className="opacity-50">{item.type}:</span>{" "}
                    <span> {item.context}</span>
                  </h3>
                );
              })}
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Info;
