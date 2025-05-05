import StatusCard from "@/components/dashboard-component/dashboard-sub-component/status-card";

export default function DashboardStatus() {
  return (
    <>
        <div className="flex flex-col">
          <p className="md:self-end text-center text-2xl mt-4 mb-5">
            Your Account at a Glance
          </p>
          <StatusCard value="Your Student data is incomplete. Please review your details." icon="ph:student" bgColor="bg-[#E31B23]"></StatusCard>
          <StatusCard value="Your class schedule is all set!" icon="mdi:calendar-outline" bgColor="bg-[#4CAF50]"></StatusCard>
          <StatusCard value="Your course selection is complete!" icon="solar:book-outline" bgColor="bg-[#4CAF50]"></StatusCard>
        </div>
    </>
  );
}