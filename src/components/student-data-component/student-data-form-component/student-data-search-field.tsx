import { Icon } from "@iconify/react";

export default function StudentDataSearchField() {
  return (
    <>
      <div className="relative h-[55px] mb-8">
        <input
          type="text"
          className="bg-[#D0E1FA] h-[55px] w-[100%] pl-12 rounded-[30px]"
          placeholder="Search..."
        />
        <Icon
          icon="material-symbols:search"
          className="absolute w-[30px] h-[30px] mr-2 left-4 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </>
  );
}
