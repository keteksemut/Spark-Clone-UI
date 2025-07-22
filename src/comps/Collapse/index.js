import { useRef, useState, useCallback, useEffect, forwardRef } from "react";
import { mergeRefs } from "@/libs/mergeRefs";
import { screenSizeObserver } from "@/libs/screenSizeObserver";
import { transition } from "@/libs/transition";
import cn from "clsx";
import st from "./index.module.css";

export function Collapse({
        open = !1,
        minHeight = 0,
        maxHeight = 1 / 0,
        displayScrollbarOnOpen = !0,
        dispatchResize = !0,
        className,
        children,
        animation,
        id,
    }, t) {
    const v = useRef(!1);
    const b = mergeRefs(t);
    const y = useRef(null);
    const w = useRef(0);
    const [k, x] = useState(open || !1);
    const j = useCallback(() => {
        if (!y.current || !b.current) return;

        clearTimeout(w.current);
        y.current.removeAttribute("inert");

        const e = (animation?.openDuration) || 0.6;

        transition(
            b.current,
            e,
            {
                height: `${Math.min(maxHeight, y.current.clientHeight)}px`,
            },
            {
                ease: animation?.openEaseCSS || "default",
            }
        );

        w.current = window.setTimeout(() => {
            if (y.current && b.current) {
                if (maxHeight < y.current.clientHeight) {
                    if (displayScrollbarOnOpen) {
                        b.current.style.overflow = "auto";
                    }
                } else {
                    b.current.style.height = "auto";
                }

                if (dispatchResize) {
                    screenSizeObserver.onResize();
                }
            }
        }, e * 1000);
    }, []);


    const O = useCallback(() => {
        if (!y.current || !b.current) return;

        clearTimeout(w.current);
        y.current.setAttribute("inert", "");

        const e = (animation?.closeDuration) || 0.6;
        const t = Math.min(maxHeight, y.current.clientHeight);

        if (displayScrollbarOnOpen) {
            b.current.style.overflow = "hidden";
        }

        transition(b.current, 0, {
            height: `${t}px`,
        });

        if (e > 0) {
            window.setTimeout(() => {
                if (b.current) {
                    transition(
                        b.current,
                        e,
                        { height: minHeight },
                        {
                            ease: animation?.closeEaseCSS || "default",
                        }
                    );

                    w.current = window.setTimeout(() => {
                        if (b.current && dispatchResize) {
                            screenSizeObserver.onResize();
                        }
                    }, e * 1000);
                }
            }, 20);
        }
    }, []);

    useEffect(() => {
        if (open) {
            j();
            x(true);
        } else {
            O();
            x(false);
        }
        v.current = true;
    }, [open]);


    return (
        <div
            className={cn(st.collapse, className)}
            ref={b}
            id={id}
            aria-hidden={!k}
        >
            <div ref={y}>
                {children}
            </div>
        </div>
    )
};

export default forwardRef(Collapse);
