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
    route: "facebook.com",
    icon: FacebookOutlined,
  },
  {
    route: "linked.com",
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
        {mediaArr.map((item) => {
          return (
            <Link key={item.route} href={item.route}>
              <item.icon />
            </Link>
          );
        })}
      </div>
      <button
        type="button"
        className="bg-slate-700 text-white rounded-full flex flex-row py-1 px-2 gap-2 items-center"
      >
        <span className="text-sm">Hire me</span>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
          <SendOutlined className="text-slate-950 -rotate-45" />
        </div>
      </button>
    </div>
  );
};

export default MenuMore;
