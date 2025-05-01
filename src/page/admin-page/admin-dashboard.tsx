import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardPending from "@/components/dashboard-component/dashboard-pending";

export default function AdminDashboard() {
  const adaGak = true;

  return (
    <>
      <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">
        Dashboard
      </h1>
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
        <DashboardPending></DashboardPending>
      ) : (
        <h1 className="mt-50 mb-50 text-[#1952a6] font-bold">
          "No account registration requests at the moment. Please check back
          later!"
        </h1>
      )}
    </>
  );
}
