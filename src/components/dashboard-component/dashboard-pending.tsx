import DashboardPendingCard from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-pending-card";

export default function AdminDashboardTwo() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <h1 className="text-2xl mt-4 mb-5">
          Pending Student Account Approvals
        </h1>
        <div className="flex flex-col items-center">
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
        </div>
      </div>
    </>
  );
}
