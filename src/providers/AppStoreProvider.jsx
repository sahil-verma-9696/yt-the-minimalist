import { useState } from "react";
// import useCheckAuthenticity from "../hooks/useCheckAuthenticity";
import { AppStore } from "../context/app-store";

const AppStoreProvider = ({ children }) => {
  // all app central states and logics here



  // global states
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // context values
  const contextValues = {
    isUserAuthenticated,
    setIsUserAuthenticated,
  };
  return (
    <AppStore.Provider value={contextValues}>{children}</AppStore.Provider>
  );
};

export default AppStoreProvider;
