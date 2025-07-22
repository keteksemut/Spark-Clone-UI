import { EventDispatcher } from "./EventDispatcher";

const dispatcher = new EventDispatcher();
let dropdowns = [];

const findDropdown = (id) => dropdowns.find((d) => d.id === id) || null;

export const registerDropdown = (dropdown) => {
  if (findDropdown(dropdown.id)) {
    throw new Error(`Dropdown with id ${dropdown.id} already exists in the global state`);
  }
  dropdowns.push(dropdown);
};

export const unregisterDropdown = (id) => {
  if (!findDropdown(id)) {
    throw new Error(`Dropdown with id ${id} doesn't exist in the global state`);
  }
  dropdowns = dropdowns.filter((d) => d.id !== id);
};

export const dropdownManager = {
  open: (id) => {
    const dropdown = findDropdown(id);
    if (dropdown && !dropdown.isOpen) {
      dropdown.isOpen = true;
      dispatcher.dispatch({
        type: "dropdown-open",
        payload: { id },
      });
    }
  },

  close: (id) => {
    const dropdown = findDropdown(id);
    if (dropdown && dropdown.isOpen) {
      dropdown.isOpen = false;
      dispatcher.dispatch({
        type: "dropdown-close",
        payload: { id },
      });
    }
  },

  toggle: (id) => {
    const dropdown = findDropdown(id);
    if (dropdown) {
      dropdown.isOpen = !dropdown.isOpen;
      dispatcher.dispatch({
        type: dropdown.isOpen ? "dropdown-open" : "dropdown-close",
        payload: { id },
      });
    }
  },

  closeAll: () => {
    for (const dropdown of dropdowns) {
      if (dropdown.isOpen) {
        dropdown.isOpen = false;
        dispatcher.dispatch({
          type: "dropdown-close",
          payload: { id: dropdown.id },
        });
      }
    }
  },

  closeHeaderDropdowns: () => {
    for (const dropdown of dropdowns) {
      if (dropdown.isOpen && dropdown.id.includes("header")) {
        dropdownManager.close(dropdown.id);
      }
    }
  },

  getById: (id) => findDropdown(id),
  getState: () => dropdowns,

  subscribe: (handler) => dispatcher.subscribe(handler),
  unsubscribe: (handler) => dispatcher.unsubscribe(handler),
};
