import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new timeout");
      setDebounceValue(value);
    }, delay);

    return () => {
      console.log("clearing the timeout");
      clearTimeout(id);
    };
  }, [value, delay]);

  return debounceValue;
};
export default useDebounce;
