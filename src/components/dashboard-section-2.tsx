import { Icon } from "@iconify/react";

export default function DashboardSectionTwo() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <p className="self-end text-2xl mt-4 mb-5">Find What You Need, Fast!</p>
        <div className="flex justify-between">
        <div className="bg-[#5398ff] text-white w-[300px] h-[300px] flex flex-col items-center justify-center">
          <Icon icon="ph:student" className="w-[50px] h-[50px] mr-6 ml-6" />
          <h1 className="text-2xl text-center p-3">
            View Your Student Profile
          </h1>
        </div>
        <div className="bg-[#5398ff] text-white w-[300px] h-[300px] flex flex-col items-center justify-center">
          <Icon icon="ph:student" className="w-[50px] h-[50px] mr-6 ml-6" />
          <h1 className="text-2xl text-center p-3">
            View Your Student Profile
          </h1>
        </div>
        <div className="bg-[#5398ff] text-white w-[300px] h-[300px] flex flex-col items-center justify-center">
          <Icon icon="ph:student" className="w-[50px] h-[50px] mr-6 ml-6" />
          <h1 className="text-2xl text-center p-3">
            View Your Student Profile
          </h1>
        </div>
        </div>
      </div>
    </>
  );
}
