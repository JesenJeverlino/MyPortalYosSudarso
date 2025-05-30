import { Icon } from "@iconify/react";
import UserHeader from "@/components/user-header";
import ChooseDay from "@/components/other-component/choose-day";
import Table from "@/components/other-component/table";
import Button from "@/components/other-component/button";
import { useSelection } from "@/other/allowKrsSubmitContext";
import { useState } from "react";
import { useAuth } from "@/other/authContext";

export default function StudyPlan() {
  const { loginInfo } = useAuth();
  const HaveStudyPlan = loginInfo?.grade !== 1;
  const { selectionEnabled } = useSelection();

  const [selectedDay, setSelectedDay] = useState(1);
  const handleDayChange = (day: 1 | 2 | 3 | 4 | 5) => {
    setSelectedDay(day);
  };

  return (
    <>
      <UserHeader
        img="blush/studyplan-blush.png"
        value="Customize your study plan effortlessly!  📖"
      ></UserHeader>
      {!selectionEnabled ? (
        <h1 className="w-[80%] text-center mt-50 mb-50 text-[#1952a6] font-bold">
          Course Selection is Disabled by Admin!
        </h1>
      ) : HaveStudyPlan ? (
        <>
          <ChooseDay onDayChange={handleDayChange} />
          <div className="mt-20 w-[90%]">
            <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
              Your Monday Subjects Selection
            </h1>
            <Table selectedDay={selectedDay} canChoose={true}></Table>
          </div>
        </>
      ) : (
        <h1 className="w-[80%] text-center mt-50 mb-50 text-[#1952a6] font-bold">
          "Course selection is for 11th and 12th graders only. Sit tight—your
          time to choose will come soon!"
        </h1>
      )}
    </>
  );
}
