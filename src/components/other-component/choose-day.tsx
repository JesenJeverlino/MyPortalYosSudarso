import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";
import { useState } from "react";

interface ChooseDayProps {
  onDayChange: (day: 1 | 2 | 3 | 4 | 5) => void;
}

export default function ChooseDay({ onDayChange }: ChooseDayProps) {
  //handle choose day button
  const [activeDay, setActiveDay] = useState<1 | 2 | 3 | 4 | 5>(1);
  const handleChooseDay = (day: number) => {
    setActiveDay(day as 1 | 2 | 3 | 4 | 5);
    onDayChange(day as 1 | 2 | 3 | 4 | 5);
  };

  return (
    <>
      <div className="mt-20 w-[90%] overflow-x-auto pb-5">
        <div className="flex justify-between min-w-[860px] p-3 border-2 border-[#1952a6] rounded-[30px]">
          <ChooseDayCard
            value="MONDAY"
            isActive={activeDay === 1}
            onClick={() => handleChooseDay(1)}
          ></ChooseDayCard>
          <ChooseDayCard
            value="TUESDAY"
            isActive={activeDay === 2}
            onClick={() => handleChooseDay(2)}
          ></ChooseDayCard>
          <ChooseDayCard
            value="WEDNESDAY"
            isActive={activeDay === 3}
            onClick={() => handleChooseDay(3)}
          ></ChooseDayCard>
          <ChooseDayCard
            value="THURSDAY"
            isActive={activeDay === 4}
            onClick={() => handleChooseDay(4)}
          ></ChooseDayCard>
          <ChooseDayCard
            value="FRIDAY"
            isActive={activeDay === 5}
            onClick={() => handleChooseDay(5)}
          ></ChooseDayCard>
        </div>
      </div>
    </>
  );
}
