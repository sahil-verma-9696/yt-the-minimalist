import React from "react";
import Button from "../button/Button";
import useAppStore from "./../../hooks/useAppStore";
import useGoogleSign from "../../hooks/useGoogleSign";

export default function Navbar() {
  // context
  const { isUserAuthenticated } = useAppStore();
  
  // custom hooks
  const { signIn, logout } = useGoogleSign();

  // handlers
  function handleLogout() {
    logout();
  }
  function handleSignin() {
    signIn();
  }
  return (
    <div>
      {isUserAuthenticated && <Button onClick={handleLogout}>Logout</Button>}
      {!isUserAuthenticated && (
        <Button onClick={handleSignin}>Continue With Google</Button>
      )}
    </div>
  );
}
