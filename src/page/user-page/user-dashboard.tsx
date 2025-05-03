import UserHeader from "@/components/user-header";
import DashboardStatus from "@/components/dashboard-component/dashboard-status";
import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardContact from "@/components/dashboard-component/dashboard-contact";

export default function UserDashboard() {
  return (
    <>
      <UserHeader img="blush/dashboard-blush-1.png" value="All Your Academic Info in One Place!  ⭐"></UserHeader>

      <div className="mt-20 text-[#1952a6] font-bold w-[90%]">
        <p className="text-[3.5rem]">Welcome to MyPortal, Friends!</p>
        <p className="text-2xl">Glad to see you here. Let's get started!</p>
        <div className="flex flex-col gap-20">
          <DashboardStatus></DashboardStatus>
          <DashboardQuickAcc
            value={[
              "View Your Student Profile",
              "Check Your Class Timetable",
              "Plan Your Courses",
            ]}
            icon={["ph:student", "mdi:calendar-outline", "solar:book-outline"]}
            navigateTo={[
              "/user-student-data",
              "/user-class-and-schedule",
              "/user-study-plan",
            ]}
          ></DashboardQuickAcc>
          <DashboardContact></DashboardContact>
        </div>
      </div>
    </>
  );
}
