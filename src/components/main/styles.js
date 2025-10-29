export function useStyle() {
  const styles = {
    classes: {
      outer: [
        "bg-gray-100 dark:bg-gray-800",
        "text-slate-600 dark:text-slate-300",
        "w-full",
        "px-4 py-2",
      ].join(" "),
      navbarOuter: ["w-full", "flex", "justify-between"].join(" "),
      oauthBtn: [
        "flex",
        "items-center",
        "gap-2",
        "rounded-sm",
        "dark:bg-blue-400",
        "hover:dark:bg-blue-500",
      ].join(" "),
    },
    styleObj: {},
  };
  return styles;
}
