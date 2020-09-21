import React from "react";
import { useToggle } from "./../hooks/";

export const Toggle = () => {
  const [toggle, handleToggle] = useToggle(false);
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <p>To be Toggle</p>}
    </div>
  );
};
