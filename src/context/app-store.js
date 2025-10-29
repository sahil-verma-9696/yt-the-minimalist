import { createContext } from "react";

// default value
const defaultValue = {
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => {},
};

// creating context
export const AppStore = createContext(defaultValue);
