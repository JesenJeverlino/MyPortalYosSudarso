import { Link } from "react-router-dom";
import AdminStudentDetailsForm from "@/components/other-component/admin-student-details-form";
import Table from "@/components/other-component/table";
import SquareDropdown from "@/components/other-component/square-dropdown";
import Button from "@/components/other-component/button";
import ButtonWithText from "@/components/other-component/button-with-text";

export default function AdminStudentDataDetails() {
  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[900px]">
          <div className="mt-5 w-full flex">
            <div className="flex space-x-6">
              <Button value="Mark as Graduate" variant="square-green"></Button>
              <Button value="Undo Promotion" variant="square-red"></Button>
            </div>
            <div className="ml-auto flex">
              <ButtonWithText></ButtonWithText>
              <Link to="/admin-student-data">
                <Button value="Back" variant="square-blue"></Button>
              </Link>
            </div>
          </div>
          <AdminStudentDetailsForm></AdminStudentDetailsForm>
          <hr className="border-2 border-[#5398ff] mt-5" />
          <SquareDropdown
            label="Selected Courses"
            options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
          ></SquareDropdown>
          <Table canChoose={false}></Table>
        </div>
      </div>
    </>
  );
}
