import { Icon } from "@iconify/react";

export default function NoStudyPlan() {
  return (
    <>
      <div className="text-[#1952a6] mt-50">
        <div className="flex justify-center">
          <Icon icon="twemoji:man-student" className="w-[36px] h-[36px] mr-3" />
          <h1 className="text-3xl font-bold">Patience, Young Scholar!</h1>
        </div>
        <p className="text-xl font-bold ">
          "Course selection is for 11th and 12th graders only. Sit tight—your
          time to choose will come soon!"
        </p>
      </div>
    </>
  );
}
