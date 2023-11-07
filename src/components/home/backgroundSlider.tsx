import { useClass } from "@context/className";
import React from "react";

const BackgroundSlider = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const { updateClass } = useClass();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateClass('linear-saumon')
      setIsHovered(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className={`bg_slider ${isHovered && "hovered"} w-full md:min-h-[910px] animate__animated animate__fadeInUpBig flex justify-between items-start z-10 h-full inset-0 absolute -top-20`}>
      <p className="md:max-w-[300px] uppercase text-[245px] leading-[220px] font-neueBold">
        for bold mind only
      </p>
    </div>
  );
};

export default BackgroundSlider;
