import { useRef } from "react";
import cn from "clsx";
import st from "./index.module.css";

// Resolve the heading tag to render
const resolveTag = (level, tagName) => {
  if (tagName) return tagName;

  switch (level) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      return `h${level}`;
    case "extra":
      return "h3";
    default:
      return "h6";
  }
};

export default function AnimatedHeading ({
  children,
  id,
  className,
  level,
  tagName,
  isTriggered,
  animationType,
  animationDelay,
  headingRef,
  style,
  ...props
}) {
  const localRef = useRef(null);
  const Tag = resolveTag(level, tagName);

  const combinedStyle = {
    ...style,
    transitionDelay: animationDelay
      ? `calc(${animationDelay}ms + var(--menu-follow-delay))`
      : undefined,
  };

  return (
    <Tag
      id={id}
      ref={headingRef || localRef}
      className={cn(
        st.heading,
        st[`heading_${level}`],
        animationType &&
          animationType !== "line-by-line" &&
          st[`heading_animation--${animationType}`],
        isTriggered &&
          animationType &&
          animationType !== "line-by-line" &&
          st.heading_triggered,
        className
      )}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Tag>
  );
};
