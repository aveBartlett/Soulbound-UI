import React from "react";
import Link from "next/link";
import Image from "next/image";
import title from "../../../public/souldbound/title.png";

const Title = () => {
  return (
    <div className=" pr-2">
      <Link href="/">
        <div className="flex items-center pr-2">
          <Image src={title} alt="Soulbound Title" width={400} height={100} />
        </div>
      </Link>
    </div>
  );
};

export default Title;
