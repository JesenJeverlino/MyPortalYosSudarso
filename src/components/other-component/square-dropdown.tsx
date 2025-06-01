import { Icon } from "@iconify/react";

type SquareDropdownProps = {
  label: string;
  options: string[];
  onChange?: (selected: string) => void;
};

export default function SquareDropdown({
  label,
  options,
  onChange,
}: SquareDropdownProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (onChange) onChange(e.target.value);
  }

  return (
    <>
      <div className="flex flex-1 items-center mb-5 mt-15">
        <label className={`m-5 text-[#1952a6] text-2xl font-bold`}>
          {label}
        </label>
        <div className="relative 2xl:w-[18%] w-[22%]">
          <select
            onChange={handleChange}
            className="bg-[#1952a6] text-white text-lg font-bold h-[45px] w-full pl-5 appearance-none"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
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
