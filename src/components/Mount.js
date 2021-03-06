import React from "react";

import { useMount, useUnmount, useToggle } from "../hooks/index";

const Mount = () => {
  const [toggle, handleToggle] = useToggle(false);
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <UnMount />}
    </div>
  );
};

export const UnMount = () => {
  useMount(() => {
    console.log("I mounted");
  });

  useUnmount(() => {
    console.log("I unMounted");
  });
  return <div>Unmount</div>;
};
export default Mount;
