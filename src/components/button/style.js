function useStyles(params) {
  const { className, style, radius } = params;
  const RADIUS = {
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };
  return {
    classes: {
      button: `${className} bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer ${RADIUS[radius]} `,
    },
    stylesObj: {
      button: { ...style },
    },
  };
}

export default useStyles;
