import React, { useState } from "react";
import Simomns from "../components/simomns/simomns";

const IndexPage = () => {
  let [simomnsAnimation, setSimomnsAnimation] = useState("idle");
  return (
    <section>
      <Simomns startAnimation={simomnsAnimation} />
    </section>
  );
};

export default IndexPage;
