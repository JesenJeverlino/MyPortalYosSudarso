import Sidebar from "@/components/sidebar";
import DashboardSectionTwo from "@/components/dashboard-component/dashboard-quick-acc";
import AdminDashboardTwo from "@/components/admin-dashboard-section-2";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">Dashboard</h1>
            <DashboardSectionTwo></DashboardSectionTwo>
            <AdminDashboardTwo></AdminDashboardTwo>
          </div>
        </main>
      </div>
    </>
  );
}
