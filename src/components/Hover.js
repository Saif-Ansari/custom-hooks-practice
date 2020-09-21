import React, { useState, useMemo } from "react";
import { Card } from "../Elements";
import black from "../black.png";
import { useHover } from "./../hooks/index";

const Hover = () => {
  const [isHovered, bind] = useHover(false);
  console.log(isHovered, "hover");
  return (
    <div>
      <Card
        {...bind}
        style={{ background: isHovered ? "var(--green)" : "var(--black)" }}
      >
        <h3>Some card</h3>
        <img src={black} />
      </Card>
    </div>
  );
};

export default Hover;
