import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";

export default function ChooseDay() {
  return (
    <>
      <div className="mt-20 w-[90%] flex justify-between">
        <ChooseDayCard value="MONDAY" isActive={true}></ChooseDayCard>
        <ChooseDayCard value="TUESDAY" isActive={false}></ChooseDayCard>
        <ChooseDayCard value="WEDNESDAY" isActive={false}></ChooseDayCard>
        <ChooseDayCard value="THURSDAY" isActive={false}></ChooseDayCard>
        <ChooseDayCard value="FRIDAY" isActive={false}></ChooseDayCard>
      </div>
    </>
  );
}