import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface DashboardAdminLayoutProps {
  children: React.ReactNode;
}

const DashboardAdminLayout = async ({
  children,
}: DashboardAdminLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");

    // return <h1>You are not authorized to access this page.</h1>;
  }
  return <div>{children}</div>;
};

export default DashboardAdminLayout;
