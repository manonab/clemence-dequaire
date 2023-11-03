import React from "react";
import "animate.css";
import { NextPage } from "next";
import Eye from "../../public/static/assets/animation.png";
import Image from "next/image";

const Home: NextPage = () => {

  return (
    <div className="mx-auto top-[90px] relative">
      <Image
        src={Eye}
        alt="Image"
        width={400}
        height={400}
        className="animate__animated animate__fadeInUpBig  animate__slow rounded mx-auto my-auto"
      />
    </div>
  );
}
export default Home;