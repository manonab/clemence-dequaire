import { useClass } from "@context/className";
import React, { useEffect, useState } from "react";

const BackgroundSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { setCssClass } = useClass();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCssClass('linear-saumon');
      setIsHovered(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`bg_slider ${isHovered && "hovered"} w-full md:min-h-[910px] animate__animated animate__fadeInUpBig flex justify-between items-start z-10 h-full inset-0 absolute -top-20`}>
      <div className="flex-col">
        <p className={`move-left-to-right  uppercase text-[245px] leading-[200px] font-neueExtra`} style={{ animationDelay: "2s" }}>
          for
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.1s" }}>
          bold
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.2s" }}>
          mind
        </p>
        <p className="move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra" style={{ animationDelay: "2.3s" }}>
          only
        </p>
      </div>
    </div>
  );
};

export default BackgroundSlider;
