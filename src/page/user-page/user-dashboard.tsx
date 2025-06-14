import UserHeader from "@/components/user-header";
import DashboardSFeature from "@/components/dashboard-component/dashboard-feature";
import DashboardQuickAcc from "@/components/dashboard-component/dashboard-quick-acc";
import DashboardContact from "@/components/dashboard-component/dashboard-contact";
import { studentSchedules_autoAssign } from "@/services/studentSchedulesAPI";
import { useEffect, useRef } from "react";
import { useAuth } from "@/other/authContext";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

export default function UserDashboard() {
  const { loginInfo } = useAuth();
  const hasRun = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    async function assignIfNeeded() {
      setLoading(true);
      try {
        await studentSchedules_autoAssign(loginInfo!.nisn);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    assignIfNeeded();
  }, []);

  return (
    <>
      <UserHeader
        img="blush/dashboard-blush-1.png"
        value="All Your Academic Info in One Place!  ⭐"
      ></UserHeader>

      <div className="mt-20 text-[#1952a6] font-bold w-[90%]">
        <p className="xl:text-[3.5rem] lg:text-[2.8rem] md:text-[2.8rem] text-[2.0rem]">
          Welcome to MyPortal, Friends!
        </p>
        <p className="lg:mb-20 mb-15 xl:text-2xl lg:text-xl md:text-lg text-base">
          Glad to see you here. Let's get started!
        </p>
        <div className="flex flex-col gap-20">
          <DashboardSFeature></DashboardSFeature>
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

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}
    </>
  );
}
