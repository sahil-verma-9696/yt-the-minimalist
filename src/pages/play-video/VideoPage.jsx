import React from "react";
import { useParams } from "react-router";
import useAppStore from "../../hooks/useAppStore";
import useYTAPICall from "../../hooks/useYTAPICall";

export default function VideoPage() {
  const { videoId } = useParams();
  const { isUserAuthenticated } = useAppStore();
//   const { error, loading, response } = useYTAPICall({
//     isUserAuthenticated,
//     storageKey: `video-comment-${videoId}`,
//     path: "/commentThreads",
//     params: {
//       part: "snippet",
//       videoId: videoId,
//     },
//   });  
  const { verror, vloading, vresponse } = useYTAPICall({
    isUserAuthenticated,
    storageKey: `video-${videoId}`,
    path: "/videos",
    params: {
      part: "snippet,contentDetails,statistics,status",
      id: videoId,
    },
  });
  return (
    <div>
      <iframe
        width="80%"
        style={{aspectRatio: "16/9"}}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
