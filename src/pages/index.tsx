import React, { useEffect, useState } from "react";
import "animate.css";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "@common/image";
import { useClass } from "@context/className";
import BackgroundSlider from "@components/home/backgroundSlider";
import HomeComponent from "@components/home";

const Home: NextPage = () => {
  const { setCssClass } = useClass();
  const animationClass = "animate__animated animate__fadeInUpBig";
  const [state, setState] = useState({
    currentImage: 0,
    showLastPart: false,
    animationFinished: false,
  });

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
      setState((prev) => ({
        ...prev,
        currentImage: prev.currentImage < images.length - 1 ? prev.currentImage + 1 : prev.currentImage,
      }));
    }, 150);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);

    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []);

  useEffect(() => {
    if (state.currentImage === images.length - 1) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, showLastPart: true }));
      }, 1500);
    }
  }, [state.currentImage, images.length]);

  useEffect(() => {
    if (state.showLastPart) {
      setCssClass("linear-yellow " + animationClass);
      setTimeout(() => {
        setState((prev) => ({ ...prev, animationFinished: true }));
        setCssClass('linear-background');
      }, 3500);
    }
  }, [state.showLastPart]);

  return (
    <div className={`${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={animationClass}
      >
        {!state.animationFinished &&
          <Image
          src={images[state.currentImage]}
          alt="Image"
          width={400}
          height={400}
          className="rounded mx-auto"
        />
        }
      </motion.div>
      {state.showLastPart && <BackgroundSlider isVisible={!state.animationFinished} />}
      {state.animationFinished && <HomeComponent />}
    </div>
  );
};

export default Home;
