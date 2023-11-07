import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const BoldMineOnly: React.FC = () => {
  const [showText, setShowText] = useState(false);

  const textSpringProps = useSpring({
    translateX: showText ? 750 : 0,
    color: showText ? "#0071F3" : "#FF0101",
    config: config.default,
  });

  const backgroundSpringProps = useSpring({
    marginLeft: showText ? "0%" : "60%",
    backgroundColor: showText ? "#FF0101" : "#FFD700", // Saumon
    config: config.default,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <animated.p
      style={{
        transform: textSpringProps.translateX.to((val) => `translateX(${val}px)`),
        color: textSpringProps.color,
        marginLeft: backgroundSpringProps.marginLeft,
        backgroundColor: backgroundSpringProps.backgroundColor,
      }}
      className={`uppercase text-[245px] leading-[220px] font-neueBold ${showText ? "text-right" : "text-left"
        }`}
    >
      FOR BOLD MINE ONLY
    </animated.p>
  );
};

export default BoldMineOnly;
