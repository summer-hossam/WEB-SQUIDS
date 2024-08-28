/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "WebSquids LLC",
  description:
    "From Conceptualization to Realization, We Believe That Good Ideas Incite Perfect Execution.",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Clients",
      href: "/clients",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    LinkIcon:"/contact_us",
  },
};
