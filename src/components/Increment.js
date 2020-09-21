import React from "react";
import { useIncDec } from "./../hooks/index";

export const Increment = () => {
  const [volume, { inc, dec, reset }] = useIncDec({
    initial: 5,
    maxValue: 9,
    minValue: 0,
    step: 5,
  });
  return (
    <div>
      <h3>Volume</h3>
      <button onClick={dec}>-</button>
      {volume}
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
