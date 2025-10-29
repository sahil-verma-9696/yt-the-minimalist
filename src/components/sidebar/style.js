export function useStyle() {
  const styles = {
    classes: {
      pageLinks: ["flex", "flex-col", "gap-2"].join(" "),
      pageLink: [
        "flex",
        "gap-2",
        "hover:bg-slate-200 dark:hover:bg-slate-600",
        "px-2 py-1",
        "rounded-md",
      ].join(" "),
      sidebar: [
        "flex",
        "flex-col",
        "bg-slate-100 dark:bg-slate-900",
        "text-slate-600 dark:text-slate-300",
        "w-fit",
        "h-screen",
        "px-4 py-2",
        "gap-2",
        "shrink-0"
      ].join(" "),
      sidebarHeader: ["flex", "items-center", "gap-2"].join(" "),
      subscriptionList: ["flex", "flex-col", "gap-2"].join(" "),
      subscriptionListHeading: ["text-lg", "font-semibold"].join(" "),
      subscriptionListItem: ["flex", "items-center", "gap-2"].join(" "),
    },
    styleObj: {},
  };
  return styles;
}
