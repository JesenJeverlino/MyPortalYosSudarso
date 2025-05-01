import { Link } from "react-router-dom";
import DashboardPendingDetails from "@/components/dashboard-component/dashboard-pending-details";
import Button from "@/components/other-component/button";

export default function AdminDashboardPendingDetails() {
  return (
    <>
      <div className="w-[95%] p-6 border-3 border-[#1952a6] rounded-[30px]">
        <div className="mt-5 w-full flex">
          <div className="flex space-x-6">
            <Button value="Approve" variant="square-blue"></Button>
            <Button value="Reject" variant="square-blue"></Button>
          </div>
          <div className="ml-auto">
            <Link to="/admin-dashboard">
              <Button value="Back" variant="square-blue"></Button>
            </Link>
          </div>
        </div>
        <DashboardPendingDetails></DashboardPendingDetails>
      </div>
    </>
  );
}