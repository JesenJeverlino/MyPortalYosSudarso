import { Icon } from "@iconify/react";

type propsType = {
  label: string;
  options: string[];
};

export default function DropdownField({label,options,}: propsType) {
  return (
    <>
      <div className="flex flex-col flex-1">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>{label}</label>
        <div className="relative w-[60%]">
          <select className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Icon icon="mingcute:down-fill" className="w-[20px] h-[20px] absolute right-3 top-1/2 transform -translate-y-1/2"/>
        </div>
      </div>
    </>
  );
}
