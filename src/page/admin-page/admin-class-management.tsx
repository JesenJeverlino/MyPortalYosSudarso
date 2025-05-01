import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";
import CreateClassCard from "@/components/create-class-card";
import Button from "@/components/other-component/button";

export default function AdminClassManagement() {
  return (
    <>
      <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">
        Class Management
      </h1>


      <div className="mt-20 w-[90%] flex gap-3">
        <ChooseDayCard value="10" isActive={false}></ChooseDayCard>
        <ChooseDayCard value="11" isActive={true}></ChooseDayCard>
        <ChooseDayCard value="12" isActive={false}></ChooseDayCard>
      </div>


      <div className="w-[90%] mt-20 flex items-center">
        <p className="m-5 text-[#1952a6] text-2xl font-bold flex-grow text-right">KRS Submission</p>
        <Button value="Disable" variant="square-blue"></Button>
      </div>


      <div className="mt-20 w-[90%]">
        <p className="text-[#1952a6] text-lg font-bold text-left mb-5">
          Viewing Grade 11 Classes...
        </p>
        <div className="flex flex-wrap justify-between gap-5">
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="whitoss"></CreateClassCard>
        </div>


      </div>
    </>
  );
}
