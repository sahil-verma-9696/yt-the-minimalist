import React from "react";
import useAppStore from "./useAppStore";
import storageKeys from "../constants/localstorage-keys";
import { CLIENT_ID } from "../credentials";

export default function useGoogleSign() {
  // context
  const { setIsUserAuthenticated } = useAppStore();
  function signIn() {
    window.google.accounts.oauth2
      .initTokenClient({
        client_id: CLIENT_ID,
        callback: (data) => {
          localStorage.setItem(storageKeys.ACCESS_TOKEN, data.access_token);
          localStorage.setItem(
            storageKeys.EXPIRES_IN,
            Date.now() + Number(data.expires_in) * 1000
          );
          setIsUserAuthenticated(true);
        },
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        prompt: "select_account",
        error_callback: () => {
          setIsUserAuthenticated(false);
          localStorage.removeItem(storageKeys.ACCESS_TOKEN);
          localStorage.removeItem(storageKeys.EXPIRES_IN);
        },
      })
      .requestAccessToken({});
  }
  function logout() {
    setIsUserAuthenticated(false);
    localStorage.removeItem(storageKeys.ACCESS_TOKEN);
    localStorage.removeItem(storageKeys.EXPIRES_IN);
  }
  return {
    signIn,
    logout,
  };
}
