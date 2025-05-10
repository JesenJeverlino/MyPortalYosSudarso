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
          <h1 className="w-[80%] text-center mt-50 mb-50 text-[#1952a6] font-bold">"Course selection is for 11th and 12th graders only. Sit tight—your time to choose will come soon!"</h1>
      )}
    </>
  );
}
