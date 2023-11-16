import React from "react";
import MenuList from "./MenuList";

import { HomeOutlined } from "@ant-design/icons";
import MenuMore from "./MenuMore";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center  rounded-l-lg rounded-r-sm bg-gray-50">
      <div className="flex flex-row items-center">
        <div className=" text-white w-16 h-16 flex flex-row rounded-l-md justify-center items-center bg-slate-700">
          <HomeOutlined className="text-[36px]" />
        </div>
        <div className="ml-4">
          <MenuList />
        </div>
      </div>
      <div>
        <MenuMore />
      </div>
    </div>
  );
};

export default Menu;
