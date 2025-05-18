import { Icon } from "@iconify/react";

type propsType = {
  label: string;
  options: string[];
  value?:string;
  disabled?:boolean;
};

export default function DropdownField({label,options,value,disabled}: propsType) {
  return ( //sepertinya nanti harus buat 2 return seperti input-field
    <>
      <div className="flex flex-col flex-1">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>{label}</label>
        <div className="relative xl:w-[60%] md:w-[78%] sm:w-[80%] w-[100%]">
          <select value={value} disabled={disabled} className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none">
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
