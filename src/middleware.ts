export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*", //Todas las rutas que vengas despues de /dashboard
    // "/dashboard/profile",
    // "/dashboard/categories/new",
    // "/dashboard/products/new",
  ],
};
