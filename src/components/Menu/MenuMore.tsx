import React from "react";

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const mediaArr = [
  {
    route: `https://www.facebook.com/BinKaki4/`,
    icon: FacebookOutlined,
  },
  {
    route: "https://www.linkedin.com/in/binkaki/",
    icon: LinkedinOutlined,
  },
  {
    route: "twitter.com",
    icon: TwitterOutlined,
  },
];

const MenuMore = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 mr-4">
      <div className="flex flex-row justify-center items-center gap-4">
        {mediaArr.map((item, index) => {
          return (
            <Link
              key={item.route}
              href={item.route}
              data-aos="fade-up-left"
              data-aos-duration={500 * (index + 1)}
            >
              <item.icon className="text-black dark:text-slate-950" />
            </Link>
          );
        })}
      </div>
      <a
        href="mailto:duchoang020120@email.com"
        data-aos="fade-left"
        type="button"
        className="bg-slate-700 text-white rounded-full flex flex-row py-1 px-2 gap-2 items-center"
      >
        <span className="text-sm">Hire me</span>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
          <SendOutlined className="text-slate-950 -rotate-45" />
        </div>
      </a>
    </div>
  );
};

export default MenuMore;
