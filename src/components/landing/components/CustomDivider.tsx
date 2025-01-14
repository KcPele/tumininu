import Image from "next/image";
import React from "react";

const CustomDivider = () => {
  return (
    <Image
      loading="lazy"
      src="/svg/divider.svg"
      alt="divider"
      width={1118}
      height={90}
      className="object-contain mt-5 aspect-[12.35] max-w-[1118px] w-full"
    />
  );
};

export default CustomDivider;
