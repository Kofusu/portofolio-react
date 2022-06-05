import { useEffect, useState } from "react";

const usePageYOffset = () => {
  const [verticalOffset, setVerticalOffset] = useState<number>(0);
  const scrollFunc = () => setVerticalOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return {
    verticalOffset
  }
}

export default usePageYOffset