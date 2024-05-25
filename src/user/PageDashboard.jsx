import DashboardLayout from "../layout/dashboard/DashboardLayout";
import DashboardContent from "./DashboardContent";

export default function PageDashboard() {
  return <DashboardLayout content={<DashboardContent />} />;
}
