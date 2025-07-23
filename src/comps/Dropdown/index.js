// components/Dropdown/index.jsx
import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import cn from "clsx";
import useDropdownStore from "@/libs/dropdownStore";
import Collapse from "../Collapse";
import Minus from "@/assets/icons/Minus.svg";
import Plus from "@/assets/icons/Plus.svg";
import st from "./index.module.css";

// Context for sharing id and showOnHover
import { createContext, useContext } from "react";
const DropdownContext = createContext({
  id: "",
  showOnHover: false,
});

export default function Dropdown({
  id,
  open = false,
  children,
  showOnHover = false,
  closeOnOutsideClick = true,
  className,
}) {
  const { dropdowns, register, unregister, open: openDropdown, close } = useDropdownStore(
    (state) => ({
      dropdowns: state.dropdowns,
      register: state.register,
      unregister: state.unregister,
      open: state.open,
      close: state.close,
    })
  );
  const ref = useRef(null);
  const pathname = usePathname();

  // Register/unregister dropdown
  useEffect(() => {
    register(id, open);
    return () => unregister(id);
  }, [id, open, register, unregister]);

  // Sync controlled `open` prop
  useEffect(() => {
    if (open) openDropdown(id);
    else close(id);
  }, [open, id, openDropdown, close]);

  // Close on route change
  useEffect(() => {
    close(id);
  }, [pathname, id, close]);

  // Handle hover
  const handleHover = useCallback(
    (isEntering) => {
      if (showOnHover) {
        isEntering ? openDropdown(id) : close(id);
      }
    },
    [id, showOnHover, openDropdown, close]
  );

  // Handle focus for hover
  useEffect(() => {
    const handleFocus = () => {
      if (showOnHover) {
        const isFocused = ref.current?.contains(document.activeElement);
        isFocused ? openDropdown(id) : close(id);
      }
    };
    document.addEventListener("focus", handleFocus, true);
    return () => document.removeEventListener("focus", handleFocus, true);
  }, [id, showOnHover, openDropdown, close]);

  // Handle outside click
  useEffect(() => {
    if (!closeOnOutsideClick) return;
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        close(id);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [id, closeOnOutsideClick, close]);

  return (
    <DropdownContext.Provider value={{ id, showOnHover }}>
      <div
        ref={ref}
        className={cn(st.root, className)}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.displayName = "Dropdown";

Dropdown.Popover = ({ children, className }) => {
  const { id, showOnHover } = useContext(DropdownContext);
  const { dropdowns, close } = useDropdownStore((state) => ({
    dropdowns: state.dropdowns,
    close: state.close,
  }));
  const isOpen = dropdowns[id]?.isOpen || false;
  const ref = useRef(null);

  // Update tabIndex for accessibility
  useEffect(() => {
    if (ref.current && !showOnHover) {
      ref.current
        .querySelectorAll("a, button, input, textarea, select, details")
        .forEach((el) => {
          el.tabIndex = isOpen ? 0 : -1;
        });
    }
  }, [isOpen, showOnHover]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && (e.key === "Escape" || e.key === "Esc")) {
        close(id);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, id, close]);

  return (
    <div
      className={cn(st.popover, isOpen && st.popover_open, className)}
      id={id}
      aria-hidden={!isOpen}
      ref={ref}
    >
      {children}
    </div>
  );
};

Dropdown.Collapse = (props) => {
  const { id } = useContext(DropdownContext);
  const { dropdowns } = useDropdownStore((state) => ({ dropdowns: state.dropdowns }));
  const isOpen = dropdowns[id]?.isOpen || false;
  return <Collapse id={id} open={isOpen} {...props} />;
};

Dropdown.Button = ({ children, className, hasIcon = true }) => {
  const { id, showOnHover } = useContext(DropdownContext);
  const { dropdowns, toggle } = useDropdownStore((state) => ({
    dropdowns: state.dropdowns,
    toggle: state.toggle,
  }));
  const isOpen = dropdowns[id]?.isOpen || false;

  return (
    <button
      className={cn(st.button, className)}
      onClick={() => !showOnHover && toggle(id)}
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