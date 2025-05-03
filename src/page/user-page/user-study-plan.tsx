import { Icon } from "@iconify/react";
import UserHeader from "@/components/user-header";
import ChooseDay from "@/components/other-component/choose-day";
import Table from "@/components/other-component/table";
import Button from "@/components/other-component/button";

export default function StudyPlan() {
  const HaveStudyPlan = true;

  return (
    <>
      <UserHeader img="blush/studyplan-blush.png" value="Customize your study plan effortlessly!  📖"></UserHeader>

      {HaveStudyPlan ? (
        <>
          <ChooseDay />
          <div className="mt-20 w-[90%]">
            <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">Your Monday Subjects Selection</h1>
            <Table canChoose={true}></Table>
            <div className="mt-10 flex justify-end">
              <Button variant="square-blue" value="OK"></Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-[#1952a6] mt-50">
          <div className="flex justify-center">
            <Icon icon="twemoji:man-student" className="w-[36px] h-[36px] mr-3" />
            <p className="text-3xl font-bold">Patience, Young Scholar!</p>
          </div>
          <p className="text-xl font-bold ">"Course selection is for 11th and 12th graders only. Sit tight—your time to choose will come soon!"</p>
       </div>
      )}
    </>
  );
}
