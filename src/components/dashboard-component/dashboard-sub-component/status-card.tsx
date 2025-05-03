import { Icon } from "@iconify/react";

type propsType = {
    value:string;
    icon:string;
    bgColor:"bg-[#E31B23]" | "bg-[#4CAF50]";
}

export default function StatusCard({value, icon, bgColor} : propsType) {
  return (
    <>
      <div className={`text-white flex h-14 items-center border-5 border-[#1952a6] mb-5 ${bgColor}`}>
        <Icon icon={icon} className="w-[40px] h-[40px] mr-6 ml-6" />
        <p className="text-xl">
          {value}
        </p>
      </div>
    </>
  );
}