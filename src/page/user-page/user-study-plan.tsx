import Header from "@/components/header";
import ChooseDay from "@/components/other-component/choose-day";
import TableChoose from "@/components/table-choose";
import NoStudyPlan from "@/components/no-study-plan";

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
          <TableChoose />
        </>
      ) : (
        <NoStudyPlan />
      )}
    </>
  );
}
