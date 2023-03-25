import { useEffect, useState } from "react";
import { useIsElementInViewport } from "./useIsElementInViewport";

export const useIsImgLoaded = (lazy: boolean) => {
  const { elementRef, isVisible } = useIsElementInViewport({
    rootMargin: "0px 0px 500px 0px",
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return { elementRef, isLoaded };
};
