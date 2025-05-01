import Header from "@/components/header";
import ChooseDay from "@/components/other-component/choose-day";
import Table from "@/components/other-component/table";

export default function UserClassAndSchedule() {
  return (
    <>
      <Header
        img="blush/classandschedule-blush.png"
        value="Stay on track with your class schedule.  📅"
      ></Header>

      <ChooseDay></ChooseDay>

      <div className="mt-20 w-[90%]">
        <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">Monday's Schedule</h1>
        <Table canChoose={false}></Table>
      </div>
    </>
  );
}
