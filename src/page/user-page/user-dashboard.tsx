import Header from "@/components/header";
import DashboardSectionOne from "@/components/dashboard-section-1";
import DashboardSectionTwo from "@/components/dashboard-section-2";
import DashboardSectionThree from "@/components/dashboard-section-3";

export default function UserDashboard() {
  return (
    <>
      <Header
        img="blush/dashboard-blush-1.png"
        value="All Your Academic Info in One Place!  ⭐"
      ></Header>
      
      <DashboardSectionOne></DashboardSectionOne>
      <DashboardSectionTwo></DashboardSectionTwo>
      <DashboardSectionThree></DashboardSectionThree>
    </>
  );
}
