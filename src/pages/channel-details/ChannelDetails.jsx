import React from "react";
import { useParams } from "react-router";
import useAppStore from "../../hooks/useAppStore";
import useYTAPICall from "../../hooks/useYTAPICall";
import LikedVideos from "../../components/liked-videos/LikedVideos";
export default function ChannelDetailsPage() {
  const { channelId } = useParams();

  const { isUserAuthenticated } = useAppStore();

  const { error, loading, response } = useYTAPICall({
    isUserAuthenticated,
    storageKey: `channel-${channelId}`,
    path: "/channels",
    params: {
      part: "snippet,contentDetails,statistics",
      ...(channelId === "me" ? { mine: true } : { id: channelId }),
    },
  });

  return (
    <div>
      ChannelDetailsPage = {channelId}
      {channelId === "me" && <LikedVideos />}
    </div>
  );
}
