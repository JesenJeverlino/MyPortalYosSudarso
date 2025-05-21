import { Icon } from "@iconify/react";

type DropdownProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const gradeOptions = [
  { label: "All Grade", value: "" },
  { label: "10", value: "1" },
  { label: "11", value: "2" },
  { label: "12", value: "3" },
  { label: "Graduate", value: "4" },
];

export default function StudentDataClassDropdownField({
  value,
  onChange,
}: DropdownProps) {
  return (
    <>
      <div className="relative h-[55px] xl:w-[20%] md:w-[25%] sm:w-[30%] w-[45%] mb-8">
        <select
          className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none"
          value={value}
          onChange={onChange}
        >
          {gradeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          icon="mingcute:down-fill"
          className="absolute w-[30px] h-[30px] right-4 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </>
  );
}
