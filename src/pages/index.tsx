import React, { useState } from "react";
import lottie from "lottie-web";
import Simomns from "../components/simomns/simomns";

// markup
const IndexPage = () => {
  let [simomnsAnimation, setSimomnsAnimation] = useState("idle");
  return <Simomns animation={simomnsAnimation} />;
};

export default IndexPage;
