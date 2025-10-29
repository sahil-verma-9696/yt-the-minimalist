import React, { useEffect } from "react";
import { getGoogleApiResponse } from "../utils/googleAuth";

export default function useGoogleApis() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  useEffect(() => {
    getGoogleApiResponse();
  }, []);
  const result = { loading, error, response };
  return result;
}
