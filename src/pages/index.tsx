import React, { useEffect, useState } from "react";
import "animate.css";
import { NextPage } from "next";

import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "@common/image";

const Home: NextPage = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const images = [
    Images.eye,
    Images.image1,
    Images.image2,
    Images.image3,
    Images.image5,
    Images.image4,
    Images.image6,
    Images.image7,
    Images.image8,
    Images.image9,
    Images.image10,
    Images.logo
  ];

  const startSlideShow = () => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage < images.length - 1 ? prevImage + 1 : prevImage
      );
    }, 150);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const fadeInUpAnimationDuration = 1200;

    const fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, fadeInUpAnimationDuration);

    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${currentImage === images.length - 1 ? "top-0" : "top-[90px]"} mx-auto top-[90px] relative h-screen`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="animate__animated animate__fadeInUpBig"
      >
        <Image
          src={images[currentImage]}
          alt="Image"
          width={400}
          height={400}
          className="rounded mx-auto"
        />
      </motion.div>
      {/* En attendant d'avoir la fin de l'animation. */}
      {currentImage === images.length - 1 && (
        <motion.div
          className="flex justify-between items-start z-10 h-auto animate__animated animate__fadeInUpBig inset-0 absolute -top-20"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Image src={Images.mosaic} alt="mosaic image" className="w-[310px] h-[425px]" />
          <div className="relative">
            <Image src={Images.bear} alt="bear image" className="w-[550px] h-[600px] mt-[80px]" />
            <p className="text-mainColor absolute top-[50%] left-[20%] transform translate(-50%, -50%) font-neueMedium text-[80px]">Welcome.</p>
            <button className="bg-grayBlack mx-auto self-center absolute top-[75%] py-2.5 px-10 w-[163px] font-inter text-xs uppercase text-white font-bold	rounded-[50px] left-[40%] transform translate(-50%, -50%)">See more</button>
          </div>
          <Image src={Images.capiche} alt="capiche image" className="w-[300px] h-[380px] opacity-[0.9] mt-[300px]" />
        </motion.div>
      )}

    </div>
  );
};

export default Home;

{/* <motion.div
initial="hidden"
animate="visible"
variants={sectionVariants}
className="animate__animated animate__fadeInUpBig bg-yellowHome absolute inset-0 h-full"
>
<p className="font-bold text-redHome text-[220px] font-neueMedium w-1/3 leading-[180px] ">FOR BOLD MIND ONLY</p>
</motion.div> */}