import { useEffect, useState } from "react";

const useWidth = (defaultValue: number) => {
  const [width, setHeight] = useState(defaultValue);

  const handleWindowResize = () => {
    setHeight(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width];
};

export default useWidth;
