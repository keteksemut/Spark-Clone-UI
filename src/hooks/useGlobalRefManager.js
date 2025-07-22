import { useEffect, useCallback, useMemo } from "react";

// Global ref array
let refs = [];

const useGlobalRefManager = (ref) => {
  useEffect(() => {
    if (ref && !refs.includes(ref)) {
      refs.push(ref);
    }

    return () => {
      refs = refs.filter((r) => r !== ref);
    };
  }, [ref]);

  const getRefs = useCallback(() => refs, []);

  return useMemo(() => ({ getRefs }), [getRefs]);
};

export default useGlobalRefManager;
