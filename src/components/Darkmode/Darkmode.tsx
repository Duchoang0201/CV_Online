"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Darkmode = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="absolute w-full h-full  z-20">
      {" "}
      <div className="">
        <div className=" ml-8 flex justify-center items-center  bg-slate-800 dark:bg-white w-20 h-20 rounded-full relative">
          <input
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            type="checkbox"
            className="absolute opacity-0 w-full h-full z-20"
          />
          <Moon
            strokeWidth={3}
            className={`absolute w-16 h-16 text-white  transition-all duration-[2.5s] ${
              theme === "light" || theme === undefined
                ? " scale-1"
                : "rotate-[360deg] scale-0"
            }`}
          />
          <Sun
            strokeWidth={3}
            className={`absolute w-16 h-16  dark:text-gray-800  transition-all duration-[1.5s] ${
              theme === "dark" ? " scale-1" : "rotate-[360deg] scale-0"
            }`}
          />

          {/* <button
            // className="text-red-800 [clip-path:polygon(0%_0%,100%_0%,100%_100%)]"
            type="button"
            onClick={() => {
              setTheme("light");
            }}
          >
            Light
          </button>
          <button
            type="button"
            onClick={() => {
              setTheme("dark");
            }}
          >
            Dark
          </button> */}
        </div>
        <span
          className={`${
            theme === "light" ? "opacity-50" : "opacity-0"
          }  absolute w-full -mt-32 h-screen bg-black -z-[2]`}
          style={{
            transition: "1s ease-out",
            clipPath:
              theme === "light"
                ? "circle(3% at 3.8% 9.8%)"
                : "circle(126.5% at 9% 12%)",
          }}
        />
      </div>
    </div>
  );
};

export default Darkmode;