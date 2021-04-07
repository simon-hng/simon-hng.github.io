import React, { createRef, useState, useEffect } from "react";
import lottie from "lottie-web";

import animationIdle from "./animations/idle.json";

// markup
const Simomns = (props: { animation: string }) => {
  let animationContainer = createRef();
  let anim = null;

  const animations = { idle: animationIdle, ghost: animationIdle };

  let [currentAnimation, setCurrentAnimation] = useState(props.animation);

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animations[currentAnimation],
    });

    return () => anim.destroy();
  }, []);

  console.log(animations);

  return <div ref={animationContainer}>{currentAnimation}</div>;
};

export default Simomns;
