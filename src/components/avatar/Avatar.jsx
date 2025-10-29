import useStyles from "./style";

function Avatar(props) {
  const { children, className, style, text = "N/A", ...rest } = props;
  const { classes, stylesObj } = useStyles({
    className,
    style,
    ...rest,
  });

  if (typeof text !== "string") return null;

  return (
    <div style={stylesObj.avatar} className={classes.avatar} {...rest}>
      {text.toUpperCase()[0]}
    </div>
  );
}

export default Avatar;
