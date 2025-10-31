import useCheckAuthenticity from "./hooks/useCheckAuthenticity";
import useYTAPICall from "./hooks/useYTAPICall";
import PrimaryLayout from "./layouts/primary";
import Home from "./pages/home/Home";

function App() {
  // on page load check authenticity
  useCheckAuthenticity();

  // testing
  useYTAPICall({
    storageKey: "test",
    path: "/activities",
    params: {
      mine: true,
      part: "snippet",
    },
  });
  useYTAPICall({
    storageKey: "likedVideos",
    path: "/videos",
    params: {
      part: "snippet,contentDetails,statistics",
      myRating: "like",
    },
  });
  useYTAPICall({
    storageKey: "myChannelDetails",
    path: "/channels",
    params: {
      part: "snippet,contentDetails,statistics",
      mine: true,
    },
  });

  return (
    <div>
      <PrimaryLayout />
    </div>
  );
}

export default App;
