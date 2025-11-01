import { createContext } from "react";

// default value
const defaultValue = {
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => {},
  subscriptions: {},
  subscriptionsError: null,
  subscriptionsLoading: false,
};

// creating context
export const AppStore = createContext(defaultValue);
