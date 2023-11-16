"use client";

import { useTheme } from "next-themes";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function IndexPage() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="shadow-2xl dark:bg-slate-900 rounded-lg flex flex-col pt-8">
      <div className="flex flex-col justify-center pb-4">
        <button
          className="text-red-800 [clip-path:polygon(0%_0%,100%_0%,100%_100%)]"
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
        </button>
        <span
          className={`${
            theme === "light" ? "opacity-50" : "opacity-0"
          }  absolute w-full h-screen bg-black -z-[2]`}
          style={{
            transition: "1s ease-out",
            clipPath:
              theme === "light"
                ? "circle(0% at 50% 50%)"
                : "circle(150% at 50% 50%)",
          }}
        ></span>
      </div>

      <div className="flex flex-row px-4">
        <div className="w-1/2 pl-10">
          <WorkExperience />
        </div>
        <div className="w-1/2 ">
          <Education />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
