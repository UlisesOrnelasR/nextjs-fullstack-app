import { render, screen } from "@testing-library/react";
import DashboardProductsPage from "@/app/(dashboardLayout)/dashboard/(allRoles)/products/page";

it("renders the dashboard products page", () => {
  render(<DashboardProductsPage />);
  expect(screen.getByText("Products")).toBeInTheDocument();
});
