import { dropdownManager, registerDropdown, unregisterDropdown } from "@/libs/dropdownManager";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Collapse from "../Collapse";
import { useDropdownState } from "@/hooks/useDropdownState";
import useClickOutside from "@/hooks/useClickOutside";
import Minus from "@/assets/icons/Minus.svg";
import Plus from "@/assets/icons/Plus.svg";
import cn from "clsx";
import st from "./index.module.css";


const W = createContext({
    id: "",
    showOnHover: !1,
});

export default function Dropdown ({
    id,
    open,
    children,
    showOnHover,
    closeOnOutsideClick,
    className,
}) {
    const f = usePathname();
    const h = useRef(null);
    const [isOpen, _] = useState(open || !1);

    useEffect(() => dropdownManager[open ? "open" : "close"](id), [open, id]);

    useEffect(() => dropdownManager.close(id), [f, id]);

    useEffect(() => {
        registerDropdown({ id, isOpen });

        return () => {
            unregisterDropdown(id);
        }
    }, [id, isOpen]);

    const M = useCallback(() => {
        const e = dropdownManager.getById(id);
        if (e) _(e.isOpen);
    }, [id]);

    useEffect(() => {
        dropdownManager.subscribe(M);
        return () => {
            dropdownManager.unsubscribe(M);
        }
    }, [M]);

    const V = useCallback(() => {
        if (showOnHover) {
            const e = h.current?.contains(document.activeElement);
            dropdownManager[e ? "open" : "close"](id);
        }
    }, [id, showOnHover]);

    useEffect(() => {
        document.addEventListener("focus", V, !0);
        return () => {
            document.removeEventListener("focus", V, !0);
        }
    }, [V]);

    useClickOutside({
        ref: h,
        handler: () => closeOnOutsideClick && dropdownManager.close(id),
    });

    return (
        <W.Provider
            value={{
                id: id,
                showOnHover: showOnHover,
            }}
        >
            <div
                ref={h}
                className={cn(st.root, className)}
                onMouseEnter={() => showOnHover && dropdownManager.open(id)}
                onMouseLeave={() => showOnHover && dropdownManager.close(id)}
            >
                {children}
            </div>
        </W.Provider>
    )
};

Dropdown.displayName = "Dropdown"

Dropdown.Popover = ({ children, className }) => {
    const { id, showOnHover } = useContext(W);
    const { isOpen } = useDropdownState(id) || {};
    const u = useRef(null);

    useEffect(() => {
        u.current &&
            !showOnHover &&
            u.current
                .querySelectorAll(
                    "a, button, input, textarea, select, details",
                )
                .forEach((e) => {
                    e.tabIndex = isOpen ? 0 : -1;
                });
    }, [isOpen, showOnHover]);

    useEffect(() => {
        const e = (e) => {
            isOpen && ("Escape" === e.key || "Esc" === e.key) && dropdownManager.close(id);
        };
        return (
            window.addEventListener("keydown", e),
            () => {
                window.removeEventListener("keydown", e);
            }
        );
    }, [isOpen, id]);

    return (
        <div
            className={cn(st.popover, isOpen && st.popover_open, className)}
            id={id}
            aria-hidden={!isOpen}
            ref={u}
        >
            {children}
        </div>
    );
};

Dropdown.Collapse = (e) => {
    const { id } = useContext(W),
        { isOpen = !1 } = useDropdownState(id) || {};
    return (
        <Collapse id={id} open={isOpen} {...e} />
    );
};

Dropdown.Button = ({ children, className, hasIcon = !0 }) => {
    const { id, showOnHover } = useContext(W);
    const { isOpen } = useDropdownState(id) || {};

    return (
        <button
            className={cn(st.button, className)}
            onClick={() => {
                showOnHover || dropdownManager.toggle(id);
            }}
            aria-controls={id}
            aria-expanded={isOpen}
        >
            <span className={st.label}>
                {children}
                {hasIcon && (
                    <span className={st.iconContainer}>
                        <Minus className={cn(st.iconMinus, isOpen && st.iconMinus_expanded)} />
                        <Plus className={cn(st.iconPlus, isOpen && st.iconPlus_expanded)} />
                    </span>
                )}
            </span>
        </button>
    );
};
