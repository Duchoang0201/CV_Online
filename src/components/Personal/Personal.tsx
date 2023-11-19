import Image from "next/image";
import React from "react";

import Nextjs from "../../../public/images/Skills/nextjs.png";
import Reactjs from "../../../public/images/Skills/reacjts.jpg";
import Nodejs from "../../../public/images/Skills/expressjs.png";
import Zustand from "../../../public/images/Skills/zustand.png";
import Redux from "../../../public/images/Skills/redux-toolkit.avif";
import Playwright from "../../../public/images/Skills/playwright.webp";
import SocketIO from "../../../public/images/Skills/SocketIO.webp";
import Tailwind from "../../../public/images/Skills/tailwind.webp";
import Antd from "../../../public/images/Skills/ant-design.png";

const PersonalCom = () => {
  const arrTech = [
    {
      name: "nextjs",
      image: Nextjs,
    },
    {
      name: "reacjts",
      image: Reactjs,
    },
    {
      name: "nodejs",
      image: Nodejs,
    },
  ];
  const arrLib = [
    {
      name: "zustand",
      image: Zustand,
    },
    {
      name: "redux",
      image: Redux,
    },
    {
      name: "playwright",
      image: Playwright,
    },
    {
      name: "tailwind",
      image: Tailwind,
    },
    {
      name: "socketIO",
      image: SocketIO,
    },
    {
      name: "antd",
      image: Antd,
      bg: "bg-white",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <div id="overview" className="rounded-b-3xl">
        <div
          data-aos="fade-right"
          className="flex flex-row items-center relative "
        >
          <div className="w-4 h-10 rounded-sm bg-slate-800" />
          <h1 className="font-bold text-[30px] pl-3">Over view</h1>

          <span className="after:absolute after:w-2/6 after:h-1 after:bg-green-900 after:left-0 after:bottom-1 after:ml-7"></span>
        </div>
        <p
          data-aos="fade-left"
          className="px-10 text-left shadow-2xl shadow-black/10"
        >
          I am a passionate FullStack Website Developer who thrives on
          continuous learning and growth. My commitment to honing my skills and
          embracing new technologies ensures that I stay at the forefront of the
          ever-evolving web development landscape. I approach every project with
          patience, responsibility, and a relentless drive to deliver
          exceptional results.{" "}
        </p>
      </div>
      <div id="overview" className="">
        <div
          data-aos="fade-right"
          className="flex flex-row items-center relative"
        >
          <div className="w-4 h-10 rounded-sm bg-slate-800" />
          <h1 className="font-bold text-[30px] pl-3">Skills</h1>

          <span className="after:absolute after:w-2/6 after:h-1 after:bg-green-900 after:left-0 after:bottom-1 after:ml-7"></span>
        </div>
        <div>
          <h3 data-aos="fade-right" className="font-bold  pl-3">
            Technologys in use:
          </h3>

          <div className="flex flex-row justify-center gap-6">
            {arrTech.map((item, index) => {
              return (
                <div
                  key={item.image.src}
                  data-aos="fade-up-left"
                  data-aos-delay={(index + 1) * 300}
                  className="w-3/12 h-[150px] rounded-3xl"
                >
                  <Image
                    width={800}
                    height={800}
                    src={item.image.src}
                    alt={item.name}
                    className="w-full h-full rounded-3xl"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 data-aos="fade-right" className="font-bold  pl-3">
            Libraries in use:
          </h3>

          <div className="flex flex-row flex-wrap justify-center gap-6">
            {arrLib.map((item, index) => {
              return (
                <Image
                  key={item.image.src}
                  data-aos="fade-left"
                  data-aos-delay={(index + 1) * 300}
                  width={800}
                  height={800}
                  src={item.image.src}
                  alt={item.name}
                  className={`w-[100px] h-[100px] rounded-full ${
                    item.bg && item.bg
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCom;
