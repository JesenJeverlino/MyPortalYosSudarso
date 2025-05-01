import { Link } from "react-router-dom";
import Button from "./other-component/button";
import { Icon } from "@iconify/react";

export default function AdminStudentDataSectionOne() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
      <div className="relative h-[55px] w-[20%] mb-8">
        <select className="bg-[#D0E1FA] h-[55px] w-full pl-5 rounded-[30px] appearance-none">
          <option>All Class</option>
          <option>10-A</option>
          <option>11-A</option>
          <option>12-A</option>
        </select>
        <Icon
        icon="mingcute:down-fill"
        className="absolute w-[30px] h-[30px] right-4 top-1/2 transform -translate-y-1/2"
      />
          </div>
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
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center p-2 border mb-5">
            <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
            <h1 className="flex-start text-2xl w-[70%] text-left">
              Agus Bahagia (0123456789)
            </h1>
            <Link to="/admin-student-data-detail">
              <Button value="View Details" variant="square-blue"></Button>
            </Link>
          </div>
          <div className="flex justify-between items-center p-2 border mb-5">
            <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
            <h1 className="flex-start text-2xl w-[70%] text-left">
              Agus Bahagia (0123456789)
            </h1>
            <Link to="/admin-student-data-detail">
              <Button value="View Details" variant="square-blue"></Button>
            </Link>
          </div>
          <div className="flex justify-between items-center p-2 border mb-5">
            <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
            <h1 className="flex-start text-2xl w-[70%] text-left">
              Agus Bahagia (0123456789)
            </h1>
            <Link to="/admin-student-data-detail">
              <Button value="View Details" variant="square-blue"></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
