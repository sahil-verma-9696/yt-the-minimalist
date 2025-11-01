import { Menu } from "lucide-react";
import Text from "../text/Text";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";
import { useStyle } from "./style";
import Subscriptions from "./sub-components/Subscriptions";
import { Link } from "react-router";

function Sidebar() {
  const styles = useStyle();
  const { classes } = styles;

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Link to={"/"}>
          <Text as="h1">{"The Minimilist".toUpperCase()}</Text>
        </Link>
      </div>

      <div className={classes.pageLinks}>
        <Link to={"/"}>Home</Link>
        <Link to={"/channels/me"}>My Channel</Link>
        <Link to={"/popular"}>Popular</Link>
      </div>
      <Subscriptions />
    </div>
  );
}

export default Sidebar;
