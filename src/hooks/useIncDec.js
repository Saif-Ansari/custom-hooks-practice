import { useState } from "react";

const useIncDec = ({
  initial = 0,
  maxValue = 10,
  minValue = -10,
  step = 1,
}) => {
  const [value, setValue] = useState(initial);

  const inc = () => {
    setValue((prevState) =>
      prevState + step > maxValue ? maxValue : prevState + step
    );
  };

  const dec = () => {
    setValue((prevState) =>
      prevState - step < minValue ? minValue : prevState - step
    );
  };

  const reset = () => setValue(0);

  return [value, { inc, dec, reset }];
};

export default useIncDec;
