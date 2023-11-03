import React, { useEffect, useState } from "react";
import "animate.css";
import { NextPage } from "next";
import Eye from "../../public/static/assets/eye.png";
import Image1 from "../../public/static/assets/image1.png";
import Image2 from "../../public/static/assets/image2.png";
import Image3 from "../../public/static/assets/image3.png";
import Image4 from "../../public/static/assets/image4.png";
import Image5 from "../../public/static/assets/image5.png";
import Image6 from "../../public/static/assets/image6.png";
import Image7 from "../../public/static/assets/image7.png";
import Image8 from "../../public/static/assets/image8.png";
import Image9 from "../../public/static/assets/image9.png";
import Image10 from "../../public/static/assets/image10.png";
import Logo from "../../public/static/assets/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Home: NextPage = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const images = [
    Eye,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Logo
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

  return (
    <div className="mx-auto top-[90px] relative">
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
          className="rounded mx-auto my-auto"
        />
      </motion.div>
    </div>
  );
};

export default Home;
