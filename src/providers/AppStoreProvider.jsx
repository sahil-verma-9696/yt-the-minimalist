import { useState } from "react";
// import useCheckAuthenticity from "../hooks/useCheckAuthenticity";
import { AppStore } from "../context/app-store";
import useCheckAuthenticity from "../hooks/useCheckAuthenticity";
import useYTAPICall from "../hooks/useYTAPICall";

const AppStoreProvider = ({ children }) => {
  // all app central states and logics here

  // global states
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // custom hooks
  useCheckAuthenticity(isUserAuthenticated, setIsUserAuthenticated);

  const {
    response: subscriptions,
    error: subscriptionsError,
    loading: subscriptionsLoading,
  } = useYTAPICall({
    isUserAuthenticated,
    storageKey: "subscriptions",
    path: "/subscriptions",
    params: {
      part: "snippet,contentDetails,subscriberSnippet",
      mine: true,
    },
  });

  // context values
  const contextValues = {
    isUserAuthenticated,
    setIsUserAuthenticated,
    subscriptions,
    subscriptionsError,
    subscriptionsLoading,
  };
  return (
    <AppStore.Provider value={contextValues}>{children}</AppStore.Provider>
  );
};

export default AppStoreProvider;
