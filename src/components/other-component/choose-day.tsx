import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";

export default function ChooseDay() {
  return (
    <>
      <div className="mt-20 w-[90%] overflow-x-auto pb-5">
        <div className="flex justify-between min-w-[860px] p-3 border-2 border-[#1952a6] rounded-[30px]">
          <ChooseDayCard value="MONDAY" isActive={true}></ChooseDayCard>
          <ChooseDayCard value="TUESDAY" isActive={false}></ChooseDayCard>
          <ChooseDayCard value="WEDNESDAY" isActive={false}></ChooseDayCard>
          <ChooseDayCard value="THURSDAY" isActive={false}></ChooseDayCard>
          <ChooseDayCard value="FRIDAY" isActive={false}></ChooseDayCard>
        </div>
      </div>
    </>
  );
}
