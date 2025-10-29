import { CLIENT_ID } from "../../credentials";

/**
 * show signIn popup
 * return requstAccessToken function
 */
export function signIn(params) {
  const { success = (d) => console.log(d), error = (e) => console.log(e) } =
    params || {};

  // sign in logic
  return () => {
    // eslint-disable-next-line no-undef
    google.accounts.oauth2
      .initTokenClient({
        client_id: CLIENT_ID,
        callback: success,
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        prompt: "select_account",
        error_callback: error,
      })
      .requestAccessToken({});
  };
}

export function signOut() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
}
