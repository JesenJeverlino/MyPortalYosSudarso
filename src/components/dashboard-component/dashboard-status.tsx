import DashboardStatusCard from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-status-card";

export default function DashboardStatus() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%]">
        <p className="text-[3.5rem]">Welcome to MyPortal, Friends!</p>
        <p className="text-2xl">Glad to see you here. Let's get started!</p>
        <div className="flex flex-col">
          <p className="self-end text-2xl mt-4 mb-5">
            Your Account at a Glance
          </p>
          <DashboardStatusCard value="Your Student data is incomplete. Please review your details." icon="ph:student" bgColor="bg-[#E31B23]"></DashboardStatusCard>
          <DashboardStatusCard value="Your class schedule is all set!" icon="mdi:calendar-outline" bgColor="bg-[#4CAF50]"></DashboardStatusCard>
          <DashboardStatusCard value="Your course selection is complete!" icon="solar:book-outline" bgColor="bg-[#4CAF50]"></DashboardStatusCard>
        </div>
      </div>
    </>
  );
}