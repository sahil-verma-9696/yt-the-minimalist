import React from "react";
import storageKeys from "../constants/localstorage-keys";

export default function useYTAPICall({
  storageKey,
  path,
  params,
  isUserAuthenticated,
}) {
  // handling invalid inputs
  if (!storageKey || !path) throw new Error("storageKey and path are required");

  // local states
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    // check authenticity
    if (!isUserAuthenticated) {
      setLoading(false);
      setResponse(null);
      setError({ msg: "User not authenticated" });
      console.log("User not authenticated");
      return;
    }

    // get stored data
    const storedData = localStorage.getItem(storageKey);

    const etag = JSON.parse(localStorage.getItem(storageKey))?.etag || "";

    console.log(etag);

    // make API call
    window.gapi.load("client", {
      callback: () => {
        window.gapi.client
          .request({
            path: `https://www.googleapis.com/youtube/v3${path}`,
            params: {
              ...params,
              access_token: localStorage.getItem(storageKeys.ACCESS_TOKEN),
            },
            headers: {
              "If-None-Match": etag, // 👈 send saved ETag if exists
            },
          })
          .then((jsonResp) => {
            const result = jsonResp.result;
            const status = jsonResp.status;

            switch (status) {
              case 304:
                console.log(
                  `Cached Data used for path={${path} storageKey=${storageKey}}`
                );
                setResponse(JSON.parse(storedData));
                setLoading(false);
                setError(null);
                return;

              case 200:
                console.log(
                  `New Data fetched  for path={${path} storageKey=${storageKey}}`
                );
                localStorage.setItem(storageKey, JSON.stringify(result));
                setResponse(result);
                setLoading(false);
                setError(null);
                return;

              default:
                setLoading(false);
                setResponse(null);
                setError({ msg: "Something went wrong." });
                return;
            }
          })
          .catch((e) => {
            setLoading(false);
            setResponse(null);
            setError(e);
          });
      },
      onerror: (error) => {
        setLoading(false);
        setResponse(null);
        setError(error);
      },
      timeout: 5000,
      ontimeout: () => {
        setLoading(false);
        setResponse(null);
        setError({ msg: "Request timed out." });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated,window.location.href]);

  return { loading, error, response };
}
