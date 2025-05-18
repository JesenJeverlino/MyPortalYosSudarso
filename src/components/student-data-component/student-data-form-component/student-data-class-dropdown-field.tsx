import { Icon } from "@iconify/react";

export default function StudentDataClassDropdownField() {
  return (
    <>
      <div className="relative h-[55px] xl:w-[20%] md:w-[25%] sm:w-[30%] w-[45%] mb-8">
        <select className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none">
          <option>All Class</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <Icon icon="mingcute:down-fill" className="absolute w-[30px] h-[30px] right-4 top-1/2 transform -translate-y-1/2"/>
      </div>
    </>
  );
}
