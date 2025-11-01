import React from "react";
import useAppStore from "../../hooks/useAppStore";
import VideoPreview from "../video-preview/VideoPreview";
import Text from "../text/Text";

export default function VideoPreviewList() {
  const { subscriptions, subscriptionsLoading, subscriptionsError } =
    useAppStore();

  if (subscriptionsLoading) {
    return (
      <div>
        <Text>Loading...</Text>
      </div>
    );
  }

  if (subscriptionsError) {
    return (
      <div>
        <Text>{subscriptionsError?.msg || "Something went wrong"}</Text>
      </div>
    );
  }
  return (
    <div>
      {subscriptions?.items?.map((item) => {
        return <VideoPreview key={item.id} video={item} />;
      })}
    </div>
  );
}
