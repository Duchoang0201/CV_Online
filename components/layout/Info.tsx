import Image from "next/image";
import React from "react";

import avatar from "../../public/images/Avatar/AVATAR.jpg";
function Info() {
  return (
    <div>
      <div className="">
        <Image src={avatar} alt={avatar.src} />
      </div>
    </div>
  );
}

export default Info;
