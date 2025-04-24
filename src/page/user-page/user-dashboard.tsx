import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import DashboardSectionOne from "@/components/dashboard-section-1";
import DashboardSectionTwo from "@/components/dashboard-section-2";
import DashboardSectionThree from "@/components/dashboard-section-3";

export default function UserDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <Header></Header>
            <DashboardSectionOne></DashboardSectionOne>
            <DashboardSectionTwo></DashboardSectionTwo>
            <DashboardSectionThree></DashboardSectionThree>
          </div>
        </main>
      </div>
    </>
  );
}
