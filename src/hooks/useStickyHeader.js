import { dropdownManager } from "@/libs/dropdownManager";
import { scrollExporter } from "./useScrollState";
import { useRef, useEffect, useState, useCallback } from "react";

export const $ = (e) => {
  let {
    thr: t = 0,
    axis: n,
    scrollUp: r = n === "y" ? "up" : "left",
    scrollDown: i = n === "y" ? "down" : "right",
  } = e;

  let [s, o] = useState("down");

  useEffect(() => {
    let threshold = Math.max(0, t);
    let prev = n === "y" ? window.pageYOffset : window.pageXOffset;
    let ticking = false;

    const detectScroll = () => {
      let curr = n === "y" ? window.pageYOffset : window.pageXOffset;

      if (Math.abs(curr - prev) < threshold) {
        ticking = false;
        return;
      }

      o(curr > prev ? i : r);
      prev = Math.max(0, curr);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(detectScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [n, r, i, t]);

  return [s];
};


export const useStickyHeader = (e) => {
    const t = useRef(0);

    useEffect(() => {
        t.current = e.current?.clientHeight || 0;
    }, [e]);

    const [n] = $({ axis: "y", thr: 20 });
    const r = useCallback(() => {
        if (e.current) {
            (e.current.style.transitionDuration = "500ms"),
                (e.current.style.transitionTimingFunction = "ease-in-out");
        }
    }, [e]);

    const i = useCallback(() => {
        if (e.current) {
            (e.current.style.position = "fixed"),
                (e.current.style.transitionProperty = "transform"),
                (e.current.style.transform = "translateY(0%)");
        }
    }, [e]);

    const s = useCallback(() => {
        if (e.current) {
            (e.current.style.transitionProperty = "none"),
                (e.current.style.transform = "none");
        }
    }, [e]);

    const o = useCallback(() => {
        e.current?.style.transform;
        dropdownManager.closeHeaderDropdowns();
        let { top: o } = scrollExporter.get();
        if (e.current) {
            if (o <= 0) {
                s();
                return;
            }
            switch (n) {
                case "up": {
                    if (o <= t.current && e.current.style.position === "fixed") {
                        s();
                    } else {
                        i();
                    }

                    return;
                }
                case "down": {
                    if (o <= t.current) {
                        if (e.current.style.position === "absolute") {
                            s();
                        } else {
                            i();
                        }
                    } else {
                        (e.current.style.position = "fixed"),
                            (e.current.style.transform = "translateY(-200%)");
                    }

                    return;
                }
                default: {
                    return;
                }
            }
        }
    }, [n, s, i]);

    useEffect(() => {
        r();
        o();
        scrollExporter.subscribe(o);

        return () => {
            scrollExporter.unsubscribe(o);
        };
    }, [o]);
};
