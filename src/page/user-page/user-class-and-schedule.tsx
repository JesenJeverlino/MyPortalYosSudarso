import UserHeader from "@/components/user-header";
import ChooseDay from "@/components/other-component/choose-day";
import Table from "@/components/other-component/table";
import { useState } from "react";
import { useAuth } from "@/other/authContext";

export default function UserClassAndSchedule() {
  const adaGak = true;

  const [selectedDay, setSelectedDay] = useState(1);
  const handleDayChange = (day: 1 | 2 | 3 | 4 | 5) => {
    setSelectedDay(day);
  };

  const { loginInfo } = useAuth();

  return (
    <>
      <UserHeader
        img="blush/classandschedule-blush.png"
        value="Stay on track with your class schedule.  📅"
      ></UserHeader>
      <ChooseDay onDayChange={handleDayChange}></ChooseDay>
      {adaGak ? (
        <div className="mt-20 w-[90%]">
          <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
            Monday's Schedule
          </h1>
          <Table
            nisn={loginInfo!.nisn}
            selectedDay={selectedDay}
            canChoose={false}
          ></Table>
        </div>
      ) : (
        <h1 className="text-center mt-50 mb-50 text-[#1952a6] font-bold">
          "There are currently no schedules to display."
        </h1>
      )}
    </>
  );
}
