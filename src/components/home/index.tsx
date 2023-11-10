import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "@common/image";

const HomeComponent: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="z-10 flex justify-between items-start h-auto inset-0 absolute -top-20"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image src={Images.mosaic} alt="mosaic image" className="w-[310px] h-[425px] animate__animated animate__fadeInUpBig animate__delay-0.2s" />
      <div className="relative animate__animated animate__fadeInUpBig animate__delay-1.3s">
        <Image src={Images.bear} alt="bear image" className="w-[550px] h-[600px] mt-[80px]" />
        <p className="text-mainColor absolute top-[50%] left-[20%] transform translate(-50%, -50%) font-neueMedium text-[80px]">Welcome.</p>
        <button className="bg-grayBlack mx-auto self-center absolute top-[75%] py-2.5 px-10 w-[163px] font-inter text-xs uppercase text-white font-bold	rounded-[50px] left-[40%] transform translate(-50%, -50%) animate__delay-0.2s">See more</button>
      </div>
      <Image src={Images.capiche} alt="capiche image" className="w-[300px] h-[380px] opacity-[0.9] mt-[300px] animate__animated animate__fadeInUpBig animate__delay-1.5s" />
    </motion.div>

  )
};

export default HomeComponent;