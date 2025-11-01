import React from "react";
import useYTAPICall from "../../hooks/useYTAPICall";
import useAppStore from "../../hooks/useAppStore";
import { Link } from "react-router";

export default function VideoPreview({ video }) {
  const { isUserAuthenticated } = useAppStore();
  const { error, loading, response } = useYTAPICall({
    isUserAuthenticated,
    storageKey: `activities-${video?.kind}-${video?.snippet?.resourceId.channelId}`,
    path: "/activities",
    params: {
      part: "snippet,contentDetails",
      channelId: video?.snippet?.resourceId.channelId,
    },
  });

  if (loading)
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-800/40 rounded-2xl overflow-hidden h-64"
          >
            <div className="h-40 bg-neutral-700"></div>
            <div className="p-3 space-y-2">
              <div className="h-4 w-3/4 bg-neutral-700 rounded"></div>
              <div className="h-3 w-1/2 bg-neutral-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-red-400 text-center">
        ⚠️ Failed to load videos. Please try again.
      </div>
    );

  const activities = response?.items || [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Latest Uploads from{" "}
        <span className="text-indigo-400">
          {activities[0]?.snippet?.channelTitle || "Channel"}
        </span>
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {activities.map((activity) => {
          const { snippet, contentDetails } = activity;
          const videoId = contentDetails?.upload?.videoId;
          const thumbnail = snippet?.thumbnails?.medium?.url;
          const title = snippet?.title;
          const publishedAt = new Date(snippet?.publishedAt).toLocaleDateString(
            "en-IN",
            { day: "numeric", month: "short", year: "numeric" }
          );
          return (
            <Link
              key={videoId}
              to={`/videos/${videoId}`}
              className="relative group bg-neutral-900 rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300 border border-neutral-800"
            >
              
              <div className="relative">
              <span className="dark:bg-white text-black absolute top-2 right-2 px-2 py-1 text-xs rounded-md">
                {snippet?.type}
              </span>
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-200"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 text-xs rounded-md text-gray-300">
                  {publishedAt}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {snippet?.channelTitle || "Unknown Channel"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
