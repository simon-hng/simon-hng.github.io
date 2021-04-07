import React, { createRef, useState, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";

import animationIdle from "./animations/idle.json";
import animationWave from "./animations/wave.json";

const Simomns = (props: { startAnimation: string }) => {
  const animationContainer = createRef();
  const animationData = { idle: animationIdle, wave: animationWave };

  let [animation, setAnimation] = useState<AnimationItem>();

  useEffect(() => {
    updateAnimation(props.startAnimation);
  }, []);

  const updateAnimation = (animationName: string) => {
    setAnimation(
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData[animationName],
      })
    );
  };

  const queueAnimation = (animationName: string) => {
    animation.addEventListener("loopComplete", () => {
      animation.destroy();
      updateAnimation(animationName);
    });
  };

  return (
    <section>
      <div ref={animationContainer}></div>
      <button
        onClick={() => {
          queueAnimation("wave");
        }}
      >
        wave
      </button>

      <button
        onClick={() => {
          queueAnimation("idle");
        }}
      >
        idle
      </button>
    </section>
  );
};

export default Simomns;
