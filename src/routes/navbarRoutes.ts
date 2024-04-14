export const navbarRoutes = [
  {
    href: "/dashboard",
    text: "Dashboard",
    auth: true,
    // role: ["admin","moderador"] Lo va a ver un admin y moderador, se hace con condicional para controlarlo
  },
  {
    href: "/dashboard/profile",
    text: "Profile",
    auth: true,
  },
  {
    href: "/dashboard/products/new",
    text: "Create product",
    auth: true,
  },
  {
    href: "/dashboard/categories/new",
    text: "Create category",
    auth: true,
  },
  {
    href: "/auth/login",
    text: "Login",
    auth: false,
  },
  {
    href: "/auth/register",
    text: "Register",
    auth: false,
  },
];
