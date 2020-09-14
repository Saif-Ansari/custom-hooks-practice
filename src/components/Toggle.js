import React, { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle
      </button>
      {toggle && <p>To be Toggle</p>}
    </div>
  );
};
