import { Menu } from "lucide-react";
import Text from "../text/Text";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";
import { useStyle } from "./style";
import { pages } from "./constants.js";
import useGoogleApis from "../../hooks/useGoogleApis.js";

function Sidebar() {
  // dummy
  const subscripitons = [
    {
      name: "Book Insider",
    },
    {
      name: "Pyush Garg",
    },
  ];

  useGoogleApis();
  const styles = useStyle();
  const { classes, styleObj } = styles;

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Button>
          <Menu />
        </Button>
        <Text as="h1">{"The Minimilist".toUpperCase()}</Text>
      </div>

      <div className={classes.pageLinks}>
        {pages.map(({ title, path, Icon }) => (
          <a className={classes.pageLink} href={path} key={path}>
            <Icon />
            <Text>{title}</Text>
          </a>
        ))}
      </div>

      <div className={classes.subscriptionList}>
        <Text as="h2" className={classes.subscriptionListHeading}>
          Subscriptions
        </Text>
        {subscripitons.map(({ name }) => (
          <div className={classes.subscriptionListItem} key={name}>
            {/* <img src="" alt="" /> */}
            <Text>{name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
