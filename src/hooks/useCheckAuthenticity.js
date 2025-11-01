import React, { useEffect } from "react";
import storageKeys from "./../constants/localstorage-keys.js";

export default function useCheckAuthenticity(
  isUserAuthenticated,
  setIsUserAuthenticated
) {
  // const { isUserAuthenticated, setIsUserAuthenticated } = useAppStore();

  const token = localStorage.getItem(storageKeys.ACCESS_TOKEN);
  const expiresIn = localStorage.getItem(storageKeys.EXPIRES_IN);

  const hasValidToken = !!token;
  //   const hasValidExpiresIn = !!expiresIn;

  const isTokenExpired = Date.now() > Number(expiresIn); // 12 : 01  < 12 : 05
  //   debugger;
  useEffect(() => {
    if (hasValidToken) {
      if (isTokenExpired) {
        setIsUserAuthenticated(false);
        localStorage.removeItem(storageKeys.ACCESS_TOKEN);
        localStorage.removeItem(storageKeys.EXPIRES_IN);
      } else {
        setIsUserAuthenticated(true);
      }
    } else {
      setIsUserAuthenticated(false);
      localStorage.removeItem(storageKeys.ACCESS_TOKEN);
      localStorage.removeItem(storageKeys.EXPIRES_IN);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href, isUserAuthenticated]);
}
