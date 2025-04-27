import Header from "@/components/header";
import DashboardStatus from "@/components/dashboard-component/dashboard-status";
import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardContact from "@/components/dashboard-component/dashboard-contact";

export default function UserDashboard() {
  return (
    <>
      <Header
        img="blush/dashboard-blush-1.png"
        value="All Your Academic Info in One Place!  ⭐"
      ></Header>

      <DashboardStatus></DashboardStatus>
      <DashboardQuickAcc></DashboardQuickAcc>
      <DashboardContact></DashboardContact>
    </>
  );
}