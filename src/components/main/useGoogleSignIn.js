import { useEffect, useState } from "react";
import { signIn, signOut } from "./utils";

export default function useGoogleSignIn() {
  // local states
  const [showSignIn, setShowSignIn] = useState();

  //   if (hasToken && !hasExpiresIn) return;

  // handlers
  function handleSuccess(data) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem(
      "expires_in",
      Number(data.expires_in) * 1000 + Date.now()
    );

    setShowSignIn(false);
  }

  function handleError(e) {
    console.log(e);
    setShowSignIn(true);
  }

  // side effect
  useEffect(() => {
    const hasToken = !!localStorage.getItem("access_token");
    const hasExpiresIn =
      Date.now() > Number(localStorage.getItem("expires_in"));

    if (hasToken && !hasExpiresIn) setShowSignIn(false);
    else setShowSignIn(true);
  }, [showSignIn]);

  const result = {
    showSignIn,
    signOut: () => {
      signOut();
      setShowSignIn(true);
    },
    signIn: signIn({ success: handleSuccess, error: handleError }),
  };
  return result;
}
