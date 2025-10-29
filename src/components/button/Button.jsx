import useStyles from "./style";

function Button(props) {
  const { children, className, style, ...rest } = props;
  const { classes, stylesObj } = useStyles({
    className,
    style,
    ...rest,
  });
  return (
    <button style={stylesObj.button} className={classes.button} {...rest}>
      {children}
    </button>
  );
}

export default Button;
