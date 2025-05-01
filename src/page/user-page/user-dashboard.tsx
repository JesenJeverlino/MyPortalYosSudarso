import Header from "@/components/other-component/header";
import DashboardStatus from "@/components/dashboard-component/dashboard-status";
import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardContact from "@/components/dashboard-component/dashboard-contact";

export default function UserDashboard() {
  return (
    <>
      <Header
        img="blush/dashboard-blush-1.png"
        value="All Your Academic Info in One Place!  ⭐"
      ></Header>

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
    </>
  );
}
