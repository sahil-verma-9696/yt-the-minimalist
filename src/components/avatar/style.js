function useStyles(params) {
  const { className, style } = params;

  return {
    classes: {
      avatar: `bg-gray-300 text-slate-600 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center font-bold ${className}`,
    },
    stylesObj: {
      avatar: { ...style },
    },
  };
}

export default useStyles;
