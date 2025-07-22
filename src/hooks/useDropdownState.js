import { useState, useEffect, useCallback } from "react";
import { dropdownManager } from "@/libs/dropdownManager";

export const useDropdownState = (e) => {
    const [t, n] = useState(
        e
            ? dropdownManager.getById(e)
            : {
                id: e || "",
                isOpen: !1,
            }
    );

    const [r, i] = useState(e ? dropdownManager.getState() : null);

    const s = useCallback(() => {
        const r = e ? dropdownManager.getById(e) : null;
        const s = dropdownManager.getState();

        i(s ?? null);

        if (r) {
            if (!t || r.isOpen !== t.isOpen) {
                n({
                    id: e || "",
                    isOpen: r.isOpen,
                });
            }
        } else {
            n(null);
        }
    }, [e, t]);

    useEffect(() => {
        dropdownManager.subscribe(s);
        return () => {
            dropdownManager.unsubscribe(s);
        };
    }, [s]);

    return {
        id: t?.id || e || "",
        isOpen: t?.isOpen || !1,
        globalState: r,
    };
}
