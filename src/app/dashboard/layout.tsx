import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex gap-x-2 ">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
