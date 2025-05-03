import { Icon } from "@iconify/react";

export default function StudentDataClassDropdownField() {
  return (
    <>
      <div className="relative h-[55px] w-[20%] mb-8">
        <select className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none">
          <option>All Class</option>
          <option>10-A</option>
          <option>11-A</option>
          <option>12-A</option>
        </select>
        <Icon icon="mingcute:down-fill" className="absolute w-[30px] h-[30px] right-4 top-1/2 transform -translate-y-1/2"/>
      </div>
    </>
  );
}
