import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import { useStyle } from "./styles";

function Home() {
  const styles = useStyle();
  const { classes, styleObj } = styles;
  return (
    <div className={classes.homePage}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
