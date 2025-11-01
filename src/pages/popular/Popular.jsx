import React from "react";
import useAppStore from "../../hooks/useAppStore";
import useYTAPICall from "../../hooks/useYTAPICall";

export default function PopularPage() {
  const { isUserAuthenticated } = useAppStore();
  const { error, loading, response } = useYTAPICall({
    isUserAuthenticated,
    storageKey: "popularVideos",
    path: "/videos",
    params: {
      part: "snippet,contentDetails,statistics,status",
      chart: "mostPopular",
      regionCode: "IN",
    },
  });
  return <div>
    {
      response?.items?.map((item) => {
        return <div key={item.id}>{item.snippet.title}</div>
      })
    }
  </div>;
}
