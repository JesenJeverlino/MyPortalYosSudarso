import { Icon } from "@iconify/react";

export default function SquareDropdown({ label, options}: { label:string, options: string[]}) {
  return (
    <>
      <div className="flex items-center mb-5 mt-15">
        <label className={`m-5 text-[#1952a6] text-2xl font-bold`}>{label}</label>
        <div className="relative w-[18%]">
          <select className="bg-[#1952a6] text-white text-lg font-bold h-[45px] w-full pl-5 appearance-none">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <Icon
            icon="mingcute:down-fill"
            className="w-[20px] h-[20px] text-white absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
}