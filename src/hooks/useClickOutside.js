import { useEffect, useRef, useCallback } from "react";

export default function useClickOutside({ ref, handler }) {
  const stateRef = useRef({ isMouseDown: false });

  const handleMouseDown = useCallback((event) => {
    if (!isInsideRef(event, ref)) {
      stateRef.current.isMouseDown = true;
    }
  }, [ref]);

  const handleMouseUp = useCallback((event) => {
    if (
      stateRef.current.isMouseDown &&
      handler &&
      !isInsideRef(event, ref)
    ) {
      stateRef.current.isMouseDown = false;
      handler(event);
    }
  }, [ref, handler]);

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseUp]);
}

function isInsideRef(event, ref) {
  return ref.current?.contains(event.target);
}
