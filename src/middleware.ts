export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/categories/new",
    "/dashboard/products/new",
  ],
};
