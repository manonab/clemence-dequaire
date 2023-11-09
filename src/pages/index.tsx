import React, { useEffect, useState } from "react";
import "animate.css";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "@common/image";
import { useClass } from "@context/className";
import BackgroundSlider from "@components/home/backgroundSlider";

const Home: NextPage = () => {
  const { setCssClass } = useClass();
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showLastPart, setShowLastPart] = useState<boolean>(false);

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

  useEffect(() => {
    if (currentImage === images.length - 1) {
      setTimeout(() => {
        setShowLastPart(true);
      }, 1500);
    }
  }, [currentImage, images.length]);

  useEffect(() => {
    if (showLastPart) {
      setCssClass("linear-yellow animate__animated animate__fadeInUpBig");
    }
  }, [showLastPart]);

  return (
    <div className={`${currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`animate__animated animate__fadeInUpBig`}
      >
        <Image
          src={images[currentImage]}
          alt="Image"
          width={400}
          height={400}
          className="rounded mx-auto"
        />
      </motion.div>
      {showLastPart && (
        <BackgroundSlider />
      )}
    </div>
  );
};

export default Home;
