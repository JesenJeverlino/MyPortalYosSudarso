import Header from "@/components/header";
import ChooseDay from "@/components/other-component/choose-day";
import Table from "@/components/other-component/table";
import NoStudyPlan from "@/components/other-component/no-study-plan";
import Button from "@/components/other-component/button";

export default function StudyPlan() {
  const HaveStudyPlan = true;

  return (
    <>
      <Header
        img="blush/studyplan-blush.png"
        value="Customize your study plan effortlessly!  📖"
      ></Header>

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
        <NoStudyPlan />
      )}
    </>
  );
}
