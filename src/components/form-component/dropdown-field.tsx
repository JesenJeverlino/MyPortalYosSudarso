import { Icon } from "@iconify/react";
import { useFormContext } from "react-hook-form";

interface Option {
  label: string;
  value: number | string;
}

type propsType = {
  label: string;
  options2?: Option[];
  options?: string[];
  value?: string;
  disabled?: boolean;
  name?: string;
};

export default function DropdownField({
  label,
  options,
  options2,
  value,
  disabled,
  name,
}: propsType) {
  const methods = useFormContext();

  if (!methods) {
    return (
      <>
        <div className="flex flex-col flex-1">
          <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>
            {label}
          </label>
          <div className="relative xl:w-[60%] md:w-[78%] sm:w-[80%] w-[100%]">
            <select
              value={value}
              disabled={disabled}
              className={`bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none ${
                disabled ? "border-none" : "border border-[#1952a6]"
              }`}
            >
              {options!.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Icon
              icon="mingcute:down-fill"
              className="w-[20px] h-[20px] absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
      </>
    );
  }

  const { register } = useFormContext();
  return (
    <>
      <div className="flex flex-col flex-1">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>
          {label}
        </label>
        <div className="relative xl:w-[60%] md:w-[78%] sm:w-[80%] w-[100%]">
          <select
            {...register(name!)}
            disabled={disabled}
            className={`bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none ${
              disabled ? "border-none" : "border border-[#1952a6]"
            }`}
          >
            {options2!.map((option2, index) => (
              <option key={index} value={option2.value}>
                {option2.label}
              </option>
            ))}
          </select>
          <Icon
            icon="mingcute:down-fill"
            className="w-[20px] h-[20px] absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
}
