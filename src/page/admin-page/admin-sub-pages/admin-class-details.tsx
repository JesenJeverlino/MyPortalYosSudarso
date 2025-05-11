import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SquareDropdown from "@/components/other-component/square-dropdown";
import Button from "@/components/other-component/button";
import ButtonWithText from "@/components/other-component/button-with-text";
import TableHead from "@/components/other-component/other-sub-component/table-head";
import AdminChooseTable from "@/components/other-component/admin-choose-table";



export default function AdminClassDetails() {

  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[1000px]">


          <div className="mt-5 w-full flex">
            <div className="ml-auto flex">
              <ButtonWithText></ButtonWithText>
              <Link to="/admin-class-management">
                <Button value="Back" variant="square-blue"></Button>
              </Link>
            </div>
          </div>


          <div className={`flex flex-col mb-7`}>
              <label className="m-4 text-[#1952a6] text-2xl font-bold">Class Name</label>
              <div className="relative w-[40%]">
                  <input type="text" className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-full`}/>
                  <Icon icon="mdi:pencil" className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
              </div>
          </div>
          <div className={`flex flex-col mb-7`}>
              <label className="m-4 text-[#1952a6] text-2xl font-bold">Class Capacity</label>
              <div className="relative w-[20%]">
                  <input type="number" className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-full`}/>
                  <Icon icon="mdi:pencil" className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
              </div>
          </div>


          <SquareDropdown label="Class Schedule" options={["Monday","Tuesday","Wednesday","Thursday","Friday"]}></SquareDropdown>
          <div className="w-full rounded-[30px] border-3 border-[#1952a6] p-5 pb-0">
            <table className="w-full relative">
              <TableHead values={["No", "Time", "Subject", "Teacher"]}></TableHead>
              <AdminChooseTable></AdminChooseTable>
            </table>
          </div>


          <div className="flex mb-5 mt-15 font-bold items-center">
            <label className="m-5 text-[#1952a6] text-2xl">Class Roster</label>
            <p className="flex-1 text-right text-[#1952a6]">60/60 Student</p>
          </div>
          <div className="flex items-center p-2 border border-[#1952a6] text-[#1952a6] font-bold mb-5 gap-5">
            <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
            <h1 className="flex-start text-2xl w-[70%] text-left">Agus Bahagia (0123456789)</h1>
          </div>


        </div>
      </div>
    </>
  );
}
