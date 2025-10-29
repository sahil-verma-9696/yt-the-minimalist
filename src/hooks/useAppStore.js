import { useContext } from "react";
import { AppStore } from "../context/app-store";

const useAppStore = () => useContext(AppStore);

export default useAppStore;
