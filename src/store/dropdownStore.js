// libs/dropdownStore.js
import { create } from "zustand";

const useDropdownStore = create((set) => ({
  dropdowns: {}, // { [id]: { isOpen: boolean } }
  register: (id, isOpen = false) =>
    set((state) => ({
      dropdowns: { ...state.dropdowns, [id]: { isOpen } },
    })),
  unregister: (id) =>
    set((state) => {
      const { [id]: _, ...rest } = state.dropdowns;
      return { dropdowns: rest };
    }),
  open: (id) =>
    set((state) => ({
      dropdowns: { ...state.dropdowns, [id]: { ...state.dropdowns[id], isOpen: true } },
    })),
  close: (id) =>
    set((state) => ({
      dropdowns: { ...state.dropdowns, [id]: { ...state.dropdowns[id], isOpen: false } },
    })),
  toggle: (id) =>
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [id]: { ...state.dropdowns[id], isOpen: !state.dropdowns[id]?.isOpen },
      },
    })),
}));

export default useDropdownStore;