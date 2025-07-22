import getFocusableElements from "@/libs/getFocusElement";
import useGlobalRefManager from "./useGlobalRefManager";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";

export const useFocusTrap = ({ ref }) => {
  const [n, r] = useState(false); // isLocked state
  const i = useRef(false);        // hasLocked
  const s = useRef(0);            // active index
  const o = useRef(false);        // isTabbing
  const a = useRef([]);           // tabbable elements
  const u = useRef();             // previously focused element
  const c = useGlobalRefManager();                  // custom hook `O()`, likely providing refs manager

  const d = useCallback((e) => {
    if (!o.current) return;
    let t = 0;

    if (e.key === "Tab") {
      if (e.shiftKey) {
        s.current--;
        if (!a.current[s.current]) {
          s.current = a.current.length - 1;
        }

        while (t < 1000) {
          t++;
          const el = a.current[s.current];
          const isDisabled = el?.hasAttribute("disabled");
          const isTabbable = (el?.tabIndex ?? -1) >= 0;

          if (!isTabbable || isDisabled) {
            s.current--;
            if (s.current < 0) s.current = a.current.length - 1;
          } else break;
        }
      } else {
        s.current++;
        if (!a.current[s.current]) {
          s.current = 0;
        }

        while (t < 1000) {
          t++;
          const el = a.current[s.current];
          const isDisabled = el?.hasAttribute("disabled");
          const isTabbable = (el?.tabIndex ?? -1) >= 0;

          if (!isTabbable || isDisabled) {
            s.current++;
            if (s.current > a.current.length - 1) s.current = 0;
          } else break;
        }
      }

      setTimeout(() => {
        a.current[s.current]?.focus({ preventScroll: true });
      }, 0);
    }
  }, []);

  const f = useCallback(() => {
    if (i.current) return;

    u.current = document.activeElement;
    s.current = 1;

    a.current = c.getRefs()
      .map(ref => ref.current)
      .filter(Boolean)
      .concat((ref?.current ? getFocusableElements(ref.current, true) : []))
      .sort((e, n) => {
        const tabE = Math.max(0, e.tabIndex || 0);
        const tabN = Math.max(0, n.tabIndex || 0);

        if ((ref?.current) === document.activeElement) return -2;

        const isInputOrTextarea = (el) =>
          ["input", "textarea"].includes(el.tagName.toLowerCase());

        if (
          tabE === 0 &&
          isInputOrTextarea(e) &&
          !isInputOrTextarea(n)
        ) {
          return -1;
        }

        return tabE - tabN;
      });

    if (ref?.current) a.current.unshift(ref.current);

    if (a.current.length > 0) {
      a.current[0]?.focus({ preventScroll: true });
      s.current = 0;
    }

    o.current = true;
    i.current = true;
    r(i.current);
  }, [c, ref]);

  const h = useCallback(() => {
    if (!i.current) return;

    o.current = false;
    i.current = false;

    u.current?.focus();
    r(i.current);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", d);
    return () => document.removeEventListener("keydown", d);
  }, [d]);

  return useMemo(() => ({
    lock: f,
    unlock: h,
    isLocked: n,
  }), [n, f, h]);
};
