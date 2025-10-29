function Text(props) {
  const { as = "span", children, ...rest } = props;
  const Comp = as;
  return <Comp {...rest}>{children}</Comp>;
}

export default Text;
