import StudentCard from "@/components/other-component/student-card";

export default function AdminDashboardTwo() {
  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="text-2xl mt-4 mb-5">
          Pending Student Account Approvals
        </h1>
        <div className="flex flex-col items-center">
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
          <StudentCard navigateTo="/admin-dashboard-pending-details"></StudentCard>
        </div>
      </div>
    </>
  );
}
