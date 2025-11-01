import VideoPreviewList from "../../components/video-preview-list/VideoPreviewList";
import { useStyle } from "./styles";

function HomePage() {
  const styles = useStyle();
  const { classes } = styles;

  return (
    <div className={classes.homePage}>
      <VideoPreviewList />
    </div>
  );
}

export default HomePage;
