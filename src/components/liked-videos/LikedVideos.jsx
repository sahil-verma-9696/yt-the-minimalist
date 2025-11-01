import React from "react";
import useYTAPICall from "../../hooks/useYTAPICall";
import useAppStore from "../../hooks/useAppStore";

export default function LikedVideos() {
  const { isUserAuthenticated } = useAppStore();
  const { error, loading, response } = useYTAPICall({
    isUserAuthenticated,
    storageKey: `my-liked-videos`,
    path: "/videos",
    params: {
      part: "snippet,contentDetails,statistics",
      mine: true,
      myRating: "like",
    },
  });
  return <div>LikedVideos</div>;
}
