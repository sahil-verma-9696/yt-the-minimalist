import React from "react";
import { useStyle } from "../style";
import useAppStore from "../../../hooks/useAppStore";
import Text from "../../text/Text";
import { Link } from "react-router";

export default function Subscriptions() {
  const styles = useStyle();
  const { classes } = styles;
  const { subscriptions, subscriptionsLoading, subscriptionsError } =
    useAppStore();

  if (subscriptionsLoading) {
    return (
      <div className={classes.subscriptionList}>
        <Text as="h2" className={classes.subscriptionListHeading}>
          Subscriptions
        </Text>
        <Text>Loading...</Text>
      </div>
    );
  }

  if (subscriptionsError) {
    return (
      <div className={classes.subscriptionList}>
        <Text as="h2" className={classes.subscriptionListHeading}>
          Subscriptions
        </Text>
        <Text>{subscriptionsError?.msg || "Something went wrong"}</Text>
      </div>
    );
  }
  return (
    <div className={classes.subscriptionList}>
      <Text as="h2" className={classes.subscriptionListHeading}>
        Subscriptions
      </Text>
      {subscriptions?.items?.map((item) => (
        <Link to={`channels/${item.snippet.resourceId.channelId}`}>
          <div className={classes.subscriptionListItem} key={item.id}>
            {/* <img src="" alt="" /> */}

            <Text>{item.snippet.title}</Text>
          </div>
        </Link>
      ))}
    </div>
  );
}
