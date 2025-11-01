import { useStyle } from "./styles";
import Button from "./../button/Button";

function Main() {
  // custom hooks
  const { classes } = useStyle();

  return (
    <div className={classes.outer}>
      {/* Navbar */}
      <nav className={classes.navbarOuter}>
        <div></div>
      </nav>

      {/* Subscribed Channel's Videos */}
      <div>
        <div></div>
        <div className={classes?.recentVideoList}></div>
      </div>
    </div>
  );
}

export default Main;
