"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Darkmode = () => {
  const { setTheme, theme } = useTheme();

  const [themePick, setThemePick] = useState("light");
  useEffect(() => {
    setThemePick(`${theme}`);
  }, [themePick]);

  return (
    <div className="absolute w-full h-full  z-20">
      {" "}
      <div className="">
        <div className=" ml-8 flex justify-center items-center  bg-slate-800 dark:bg-white w-20 h-20 rounded-full relative">
          <input
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setThemePick(theme === "light" ? "dark" : "light");
            }}
            type="checkbox"
            className="absolute opacity-0 w-full h-full z-20"
          />

          <Moon
            strokeWidth={3}
            className={`absolute w-16 h-16 text-white transition-all duration-[2.5s] ${
              themePick === "light" ? " scale-1  " : " scale-0 rotate-[360deg]"
            }`}
          />
          <Sun
            strokeWidth={3}
            className={`absolute w-16 h-16 text-slate-800 transition-all duration-[1.5s] ${
              themePick === "dark" ? " scale-1 " : " scale-0 rotate-[360deg]"
            }`}
          />
        </div>
        <span
          className={`${
            theme === "light" ? "opacity-50" : "opacity-0"
          }  absolute w-full -mt-32 h-screen bg-black -z-[2]`}
          style={{
            transition: "1s ease-out",
            clipPath:
              theme === "light"
                ? "circle(0% at 0% 1%)"
                : "circle(126.5% at 9% 12%)",
          }}
        />
      </div>
    </div>
  );
};

export default Darkmode;
