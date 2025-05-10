import { Link } from "react-router-dom";
import AdminStudentDetailsForm from "@/components/other-component/admin-student-details-form";
import Button from "@/components/other-component/button";

export default function AdminDashboardPendingDetails() {
  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[700px]">
          <div className="mt-5 w-full flex">
            <div className="flex space-x-6">
              <Button value="Approve" variant="square-green"></Button>
              <Button value="Reject" variant="square-red"></Button>
            </div>
            <div className="ml-auto">
              <Link to="/admin-dashboard">
                <Button value="Back" variant="square-blue"></Button>
              </Link>
            </div>
          </div>
          <AdminStudentDetailsForm></AdminStudentDetailsForm>
        </div>
      </div>
    </>
  );
}
