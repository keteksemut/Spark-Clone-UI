import { EventDispatcher } from "@/libs/EventDispatcher";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import cn from "clsx";

// Event system for modal communication
const dispatcher = new EventDispatcher();

// Global modal registry
let modalRegistry = [];

// Utility to get modal by ID
const getModalById = (id) => modalRegistry.find((modal) => modal.id === id) ?? null;

// Register a new modal
const registerModal = (modal) => {
  if (modalRegistry.some((m) => m.id === modal.id)) {
    throw new Error(`Modal with id "${modal.id}" already exists.`);
  }
  modalRegistry.push(modal);
};

// Unregister a modal
const unregisterModal = (id) => {
  if (!getModalById(id)) {
    throw new Error(`Modal with id "${id}" doesn't exist.`);
  }
  modalRegistry = modalRegistry.filter((modal) => modal.id !== id);
};

// Modal manager API
export const modalManager = {
  open: (id) => {
    const modal = getModalById(id);
    if (!modal || modal.isOpen) return;

    modal.isOpen = true;
    dispatcher.dispatch({ type: "modal-open", payload: { id } });
  },

  close: (id) => {
    const modal = getModalById(id);
    if (!modal || !modal.isOpen) return;

    modal.isOpen = false;
    dispatcher.dispatch({ type: "modal-close", payload: { id } });
  },

  closeAll: () => {
    modalRegistry.forEach((modal) => {
      if (!modal.isOpen) return;
      modal.isOpen = false;
      dispatcher.dispatch({ type: "modal-close", payload: { id: modal.id } });
    });
  },

  closeAllExcept: (exceptId) => {
    modalRegistry.forEach((modal) => {
      if (!modal.isOpen || modal.id === exceptId) return;
      modal.isOpen = false;
      dispatcher.dispatch({ type: "modal-close", payload: { id: modal.id } });
    });
  },

  toggle: (id) => {
    const modal = getModalById(id);
    if (!modal) return;

    modal.isOpen = !modal.isOpen;
    dispatcher.dispatch({
      type: modal.isOpen ? "modal-open" : "modal-close",
      payload: { id },
    });
  },

  getById: getModalById,
  getState: () => modalRegistry,
  subscribe: (fn) => dispatcher.subscribe(fn),
  unsubscribe: (fn) => dispatcher.unsubscribe(fn),
};

// React modal component
export const Modal = ({
  id,
  className,
  classNameActive,
  style,
  ariaLabel,
  children,
  isOpen: initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const modalRef = useRef(null);
  const pathname = usePathname();

  // Register modal on mount, unregister on unmount
  useEffect(() => {
    registerModal({ id, isOpen });
    return () => unregisterModal(id);
  }, []);

  // Sync with external `isOpen` prop
  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  // State sync callback from modal manager
  const handleStateChange = useCallback(() => {
    const modal = modalManager.getById(id);
    if (modal) setIsOpen(modal.isOpen);
  }, [id]);

  // Handle inert attribute
  useEffect(() => {
    if (!modalRef.current) return;
    modalRef.current.toggleAttribute("inert", !isOpen);
  }, [isOpen]);

  // Subscribe to state updates
  useEffect(() => {
    modalManager.subscribe(handleStateChange);
    return () => modalManager.unsubscribe(handleStateChange);
  }, [handleStateChange]);

  // Auto-close on route change
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    modalManager.close(id);
  }, [pathname]);

  return (
    <div
      role="dialog"
      aria-hidden={!isOpen}
      aria-label={ariaLabel}
      aria-modal
      ref={modalRef}
      style={style}
      className={cn(className, isOpen && classNameActive)}
    >
      {children}
    </div>
  );
};

// Hook to track individual modal state
export const useModalState = (id) => {
  const [modalState, setModalState] = useState(id ? modalManager.getById(id) : null);

  const updateState = useCallback(() => {
    const modal = modalManager.getById(id);
    if (!modalState || modal?.isOpen !== modalState?.isOpen) {
      setModalState(modal ? { id, isOpen: modal.isOpen } : null);
    }
  }, [id, modalState]);

  useEffect(() => {
    modalManager.subscribe(updateState);
    return () => modalManager.unsubscribe(updateState);
  }, [updateState]);

  useEffect(() => {}, [id, modalState?.isOpen]); // may trigger rerenders

  return modalState;
};
