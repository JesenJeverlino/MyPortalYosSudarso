import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "@/components/other-component/button";
import ButtonWithText from "@/components/other-component/button-with-text";
import Table from "@/components/other-component/table";
import SquareDropdown from "@/components/other-component/square-dropdown";

export default function AdminClassDetails() {
  return (
    <>
      <div className="w-[95%] p-6 border-3 border-[#1952a6] rounded-[30px]">
        <div className="mt-5 w-full flex">
          <div className="ml-auto flex">
            <ButtonWithText></ButtonWithText>
            <Link to="/admin-dashboard">
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
          <SquareDropdown capacity={false} options={["Monday","Tuesday","Wednesday","Thursday","Friday"]}></SquareDropdown>
          <Table canChoose={false}></Table>
          <SquareDropdown capacity={true} options={["07.00-08.30","08.30-09.15","10.00-10.45"]}></SquareDropdown>
           <div className="flex items-center p-2 border border-[#1952a6] text-[#1952a6] font-bold mb-5 gap-5">
             <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
             <h1 className="flex-start text-2xl w-[70%] text-left">Agus Bahagia (0123456789)</h1>
           </div>
      </div>
    </>
  );
}
