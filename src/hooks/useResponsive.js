import { useLayoutEffect, useState, useRef, useCallback, useEffect, useMemo } from "react";
import { screenSizeObserver } from "@/libs/screenSizeObserver";

export const Breakpoints = {
  MOBILE: 320,
  MOBILEL: 576,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1440,
  HD: 1920,
};

export const useResponsive = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [breakpoints, setBreakpoints] = useState({
    isMobileS: false,
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isDesktopHD: false,
    isTouchScreen: false,
  });

  const isTouchScreenRef = useRef(false);

  const update = useCallback(() => {
    const { width, height } = screenSizeObserver.get();
    const isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    isTouchScreenRef.current = isTouchScreen;

    setSize({ width, height });

    setBreakpoints({
      isMobileS: width < Breakpoints.MOBILEL,
      isMobile: width < Breakpoints.TABLET,
      isTablet: width >= Breakpoints.TABLET,
      isLaptop: width >= Breakpoints.LAPTOP,
      isDesktop: width >= Breakpoints.DESKTOP,
      isDesktopHD: width >= Breakpoints.HD,
      isTouchScreen,
    });
  }, []);

  useLayoutEffect(() => {
    isTouchScreenRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    screenSizeObserver.subscribe(update);
    update();

    return () => {
      screenSizeObserver.unsubscribe(update);
    };
  }, [update]);

  return useMemo(() => ({
    width: size.width,
    height: size.height,
    ...breakpoints,
  }), [size, breakpoints]);
};
