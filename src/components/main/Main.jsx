import { useStyle } from "./styles";
import Button from "./../button/Button";
import useGoogleSignIn from "./useGoogleSignIn";

function Main() {
  // custom hooks
  const { classes, styleObj } = useStyle();
  const { showSignIn, signIn, signOut } = useGoogleSignIn();

  // handlers
  function handleLogin() {
    signIn();
  }
  function handleLogout() {
    signOut();
  }

  return (
    <div className={classes.outer}>
      {/* Navbar */}
      <nav className={classes.navbarOuter}>
        <div></div>

        {showSignIn && (
          <Button className={classes.oauthBtn} onClick={handleLogin}>
            Continue With Google
          </Button>
        )}
        {!showSignIn && (
          <Button className={classes.oauthBtn} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </nav>

      {/* Subscribed Channel's Videos */}
      <div>
        <div></div>
        <div className={classes?.recentVideoList}>
          {[].map((video) => {
            return <div className={classes?.recentVideo}></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
