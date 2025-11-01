import { useContext } from "react";
import { AppStore } from "../context/app-store";

const useAppStore = () => {
  if (!AppStore) throw new Error("AppStore is not defined");
  return useContext(AppStore);
};

export default useAppStore;
