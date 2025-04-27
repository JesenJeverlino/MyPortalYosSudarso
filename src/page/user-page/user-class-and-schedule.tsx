import Header from "@/components/header";
import ChooseDay from "@/components/choose-day";
import Table from "@/components/table";

export default function UserClassAndSchedule() {
  return (
    <>
      <Header
        img="blush/classandschedule-blush.png"
        value="Stay on track with your class schedule.  📅"
      ></Header>
      
      <ChooseDay></ChooseDay>
      <Table></Table>
    </>
  );
}