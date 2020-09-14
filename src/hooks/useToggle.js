import { useState } from "react";
export const useToggle = (initial) => {
  const [toggle, setToggle] = useState(initial);
  const handleToggle = () => setToggle((prevState) => !prevState);
  return [toggle, handleToggle];
};
