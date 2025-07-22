import { useRef, useCallback } from "react";
import { modalManager, useModalState } from "@/hooks/useModalState";
import { NavigationTypes } from "@/libs/navEnums";
import useGlobalRefManager from "@/hooks/useGlobalRefManager";

import dynamic from "next/dynamic";

import cn from "clsx";
import st from "./index.module.css";

const Burger = dynamic(() => import('@/assets/icons/Burger.svg'), { ssr: false});
const Close = dynamic(() => import('@/assets/icons/Close.svg'), { ssr: false});

export default function ToggleBurger ({ className }) {
  const i = useRef(null);
  const s = useModalState(NavigationTypes.MENU)?.isOpen;

  useGlobalRefManager(i);

  const o = useCallback(() => {
    modalManager.toggle(NavigationTypes.MENU);
  }, []);

  return (
    <button
      ref={i}
      onClick={o}
      className={cn(st.button, s && st.button_active, className)}
      aria-haspopup="true"
      aria-expanded={s}
      aria-label="Menu"
    >
      {
        <div className={st.inner} aria-hidden="true" role="presentation">
          <Burger
            className={cn(
              st.icon,
              st.iconBurger,
              s && st.iconBurger_hidden
            )}
          />
          <Close
            className={cn(st.icon, st.iconClose, s && st.iconClose_visible)}
          />
        </div>
      }
    </button>
  );
};
