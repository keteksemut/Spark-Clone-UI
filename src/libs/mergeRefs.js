import { useRef } from "react";

export const mergeRefs = (...refs) => {
  const ref = useRef(null);

  refs.forEach((r) => {
    if (!r) return;
    if (typeof r === "function") {
      r(ref.current);
    } else {
      r.current = ref.current;
    }
  });

  return ref;
};
