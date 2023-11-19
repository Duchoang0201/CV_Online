import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    title: string;
    url: string;
    context: string;
    hastag: Array<string>;
    index: number;
  };
};

function Card(data: Props) {
  const props = data.data;
  return (
    <Link
      href={props.url}
      data-aos="fade-up-left"
      data-aos-delay={(props.index + 1) * 300}
      className="max-w-[250px] w-full "
    >
      <div
        className="max-w-sm rounded overflow-hidden h-full flex flex-col justify-between
      
      shadow-none transition-shadow duration-1000 ease-in-out hover:shadow-lg hover:shadow-black dark:hover:shadow-white/80
      "
      >
        <div>
          <div className="relative w-full">
            <Image
              className="aspect-[300/200]"
              width={1000}
              height={1000}
              src={props.image.src}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.context}</p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.hastag.map((item) => {
            return (
              <span
                key={item}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{item}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default Card;
