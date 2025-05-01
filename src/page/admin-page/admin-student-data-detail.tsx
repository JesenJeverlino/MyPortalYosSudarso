import { Link } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import AdminDashboardStudentData from "@/components/admin-dashboard-student-data";
import Button from "@/components/other-component/button";

export default function AdminStudentDataDetail() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <div className="w-[95%] p-6 border-3 border-[#1952a6] rounded-[30px]">
              <div className="mt-5 w-full flex">
                <div className="flex space-x-6">
                  <Button value="Mark as G" variant="square-blue"></Button>

                  <Button value="Undo G" variant="square-blue"></Button>
                </div>
                <div className="ml-auto">
                <Button value="Delete B w text" variant="square-blue"></Button>
                  <Link to="/admin-dashboard">
                    <Button value="Back" variant="square-blue"></Button>
                  </Link>
                </div>
              </div>
              <AdminDashboardStudentData></AdminDashboardStudentData>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}