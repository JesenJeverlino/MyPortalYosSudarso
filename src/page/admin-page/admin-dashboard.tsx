import AdminHeader from "@/components/admin-header";
import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardPending from "@/components/dashboard-component/dashboard-pending";
import { useState } from "react";

export default function AdminDashboard() {
  const [adaGak, setAdaGak] = useState(true);

  return (
    <>
      <AdminHeader value="Dashboard"></AdminHeader>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col gap-20">
        <DashboardQuickAcc
          value={["View Student Data", "Manage Class", "Account Settings"]}
          icon={["ph:student", "solar:book-linear", "bi:gear-fill"]}
          navigateTo={[
            "/admin-student-data",
            "/admin-class-management",
            "/admin-account-settings",
          ]}
        ></DashboardQuickAcc>
        {adaGak ? (
          <DashboardPending
            onCheckData={(hasData) => setAdaGak(hasData)}
          ></DashboardPending>
        ) : (
          <>
            <h1 className="text-2xl mt-4">
              Pending Student Account Approvals
            </h1>
            <h1 className="text-center mt-50 mb-50 text-[#1952a6] font-bold">
              "No account registration requests at the moment. Please check back
              later!"
            </h1>
          </>
        )}
      </div>
    </>
  );
}
