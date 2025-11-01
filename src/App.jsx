import useCheckAuthenticity from "./hooks/useCheckAuthenticity";
import useYTAPICall from "./hooks/useYTAPICall";
import PrimaryLayout from "./layouts/primary";
import HomePage from "./pages/home/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PopularPage from "./pages/popular/Popular";
import ChannelDetailsPage from "./pages/channel-details/ChannelDetails";
import AppStoreProvider from "./providers/AppStoreProvider";
import SecondryLayout from "./layouts/secondry";
import VideoPage from "./pages/play-video/VideoPage";

function App() {
  // on page load check authenticity

  // testing
  // useYTAPICall({
  //   storageKey: "test",
  //   path: "/activities",
  //   params: {
  //     mine: true,
  //     part: "snippet",
  //   },
  // });
  // useYTAPICall({
  //   storageKey: "likedVideos",
  //   path: "/videos",
  //   params: {
  //     part: "snippet,contentDetails,statistics",
  //     myRating: "like",
  //   },
  // });
  // useYTAPICall({
  //   storageKey: "myChannelDetails",
  //   path: "/channels",
  //   params: {
  //     part: "snippet,contentDetails,statistics",
  //     mine: true,
  //   },
  // });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "popular",
          element: <PopularPage />,
        },
        {
          path: "channels/:channelId",
          element: <ChannelDetailsPage />,
        },
      ],
    },
    {
      path: "/videos/:videoId",
      element: <SecondryLayout />,
      children: [{ index: true, element: <VideoPage /> }],
    },
  ]);

  return (
    <AppStoreProvider>
      <RouterProvider router={router} />
    </AppStoreProvider>
  );
}

export default App;
