import { Icon } from "@iconify/react";

type SearchProps  = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function StudentDataSearchField({
  value,
  onChange,
}: SearchProps ) {
  return (
    <>
      <div className="relative h-[55px] mb-8">
        <input
          type="text"
          className="bg-[#D0E1FA] h-[55px] w-[100%] pl-12 rounded-[30px]"
          placeholder="Search by name..."
          value={value}
          onChange={onChange}
        />
        <Icon
          icon="material-symbols:search"
          className="absolute w-[30px] h-[30px] mr-2 left-4 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </>
  );
}
