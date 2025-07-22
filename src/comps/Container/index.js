import cn from "clsx";
import st from "./index.module.css";

export default function Container ({ children, className, style, containerRef }) {
    return (
        <div
            className={cn(st.container, className)}
            style={style}
            ref={containerRef}
        >
            {children}
        </div>
    );
};
