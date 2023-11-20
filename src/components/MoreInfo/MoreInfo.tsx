import React from "react";

const MoreInfoCom = () => {
  const arrSW = [
    {
      type: "strengths",
      context: `I'm a big fan of playing sports, particularly badminton, and enjoy
            self-study. I'm passionate about researching technology and coding`,
    },
    {
      type: "weaknesses",
      context: `My weakness lies in being quite perfectionistic in my work.
      Personally, my biggest weakness is being hasty, especially when new
      ideas come to mind..`,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4">
        {" "}
        <div id="overview" className="rounded-b-3xl">
          <div
            data-aos="fade-right"
            className="flex flex-row items-center relative "
          >
            <div className="w-4 h-10 rounded-sm bg-slate-800 dark:bg-white ml-3" />

            <h1 className="font-bold text-[30px] pl-3 uppercase">
              strengths / weaknesses
            </h1>

            <span className="after:absolute after:w-4/6 after:h-1 after:bg-green-900 after:left-0 after:bottom-1 after:ml-10" />
          </div>
          <div className="mx-5 ">
            {arrSW.map((item) => {
              return (
                <div data-aos="fade-left" key={item.type}>
                  <span className="capitalize font-semibold">
                    {item.type}:{" "}
                  </span>
                  <p className="px-10 text-left  shadow-black/10">
                    {item.context}.{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoCom;
