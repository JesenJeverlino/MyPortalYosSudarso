import DashboardQuickAccCard from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-quick-acc-card";

export default function DashboardQuickAcc() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <p className="self-end text-2xl mt-4 mb-5">Find What You Need, Fast!</p>
        <div className="flex justify-between">
          <DashboardQuickAccCard value="View Your Student Profile" icon="ph:student" navigateTo="/user-student-data"></DashboardQuickAccCard>
          <DashboardQuickAccCard value="Check Your Class Timetable" icon="mdi:calendar-outline" navigateTo="/user-class-and-schedule"></DashboardQuickAccCard>
          <DashboardQuickAccCard value="Plan Your Courses" icon="solar:book-outline" navigateTo="/user-study-plan"></DashboardQuickAccCard>
        </div>
      </div>
    </>
  );
}