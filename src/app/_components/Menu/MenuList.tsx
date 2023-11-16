"use client";

import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Link from "next/link";

const items = [
  {
    label: "HOME",
    key: "home",
    icon: <MailOutlined />,
    href: "/",
  },
  {
    label: "PORTFOLIO",
    key: "portfolio",
    icon: <AppstoreOutlined />,
    href: "portfolio",
  },
  {
    label: "BLOG",
    key: "blog",
    icon: <SettingOutlined />,
    href: "blog",
  },
  {
    label: "CONTACT",
    key: "contact",
    href: "contact",
  },
];

const MenuList: React.FC = () => {
  return (
    <div>
      <ul className=" flex flex-row gap-x-4">
        {items.map((item) => {
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current="page"
                className="text-slate-700 font-normal hover:font-semibold duration-500 relative"
              >
                <p className="after:bg-stone-400 after:left-0 after:bottom-0  after:absolute after:h-1 after:w-0 after:hover:w-full after:duration-500 after:transition-all cursor-pointer">
                  {item.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
