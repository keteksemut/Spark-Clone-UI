import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { EventDispatcher } from "@/libs/EventDispatcher";
import { scrollExporter } from "@/hooks/useScrollState";

// Event system for scroll lock state changes
const s = new EventDispatcher();

// Shared scroll state
const o = {
    bodyLocked: false,
    bodyMargin: 0,
};

// Active lock keys
let a = [];

// Scroll top before locking
let l = 0;

// Locking utility
export const scrollLocker = {
    lock: (e) => {
        if (a.includes(e)) return;

        a.push(e);

        if (a.length > 0 && !o.bodyLocked) {
            o.bodyLocked = true;

            const t = document.body;
            const n = t.clientWidth;

            // Save current scroll position
            const r = scrollExporter.get().top;
            l = r;

            // Apply lock styles
            t.style.position = "fixed";
            t.style.overflow = "hidden";
            t.style.left = "0px";
            t.style.right = "0px";
            t.style.top = -r + "px";

            // Lock container scroll
            scrollExporter.setContainer({ element: window, locked: true });
            window.scrollTo(0, 0);

            // Calculate scrollbar width
            o.bodyMargin = t.clientWidth - n;
            t.style.right = `${Math.max(0, o.bodyMargin)}px`;

            s.dispatch({
                type: "scroll:lock",
                payload: { key: e },
            });
        }
    },

    unlock: (e) => {
        if (!a.includes(e)) return;

        a = a.filter((t) => t !== e);

        if (a.length === 0 && o.bodyLocked) {
            o.bodyLocked = false;

            const t = document.body;

            // Reset styles
            t.style.position = "";
            t.style.overflow = "";
            t.style.left = "";
            t.style.right = "";
            t.style.top = "";

            o.bodyMargin = 0;

            // Restore scroll position
            window.scrollTo(0, l);

            scrollExporter.setContainer({ element: window, locked: false });

            s.dispatch({
                type: "scroll:unlock",
                payload: { key: e },
            });
        }
    },
};

// Hook interface
export const useScrollLock = () => {
    const [e, t] = useState(false); // locked
    const n = useRef(false);        // prev locked

    const i = useCallback((e) => scrollLocker.lock(e), []);
    const a = useCallback((e) => scrollLocker.unlock(e), []);

    const l = useCallback(() => {
        const nowLocked = o.bodyLocked;

        if (nowLocked && !n.current) n.current = true;
        else if (!nowLocked && n.current) n.current = false;

        t(nowLocked);
    }, []);

    useEffect(() => {
        s.subscribe(l);
        return () => s.unsubscribe(l);
    }, []);

    return useMemo(() => ({
        lockScroll: i,
        unlockScroll: a,
        locked: e,
        offset: o.bodyMargin,
    }), [i, a, e]);
};
