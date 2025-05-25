import { Link } from "react-router-dom";
import AdminStudentDetailsForm from "@/components/other-component/admin-student-details-form";
import Button from "@/components/other-component/button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { userStudentData_approveReject } from "@/services/userStudentDataAPI";
import { useLocation } from "react-router-dom";
import { ApproveRejectReqDto } from "@/services/userStudentDataAPI";

export default function AdminDashboardPendingDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nisn = queryParams.get("nisn");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function approveReject(param: ApproveRejectReqDto) {
    setLoading(true);
    try {
      const res = await userStudentData_approveReject(param);
      toast.success(res.message || "Action successful!", {
        onClose: () => {
          navigate("/admin-dashboard");
        },
        autoClose: 300,
      });
    } catch (err: any) {
      toast.error(err.message || "Error", {
        onClose: () => {
          navigate("/admin-dashboard");
        },
        autoClose: 300,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (bool: boolean) => {
    const submitData: ApproveRejectReqDto = {
      nisn: nisn!,
      isApproved: bool,
    };
    approveReject(submitData);
  };

  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[700px]">
          <div className="mt-5 w-full flex">
            <div className="flex space-x-6">
              <Button
                value="Approve"
                variant="square-green"
                onClick={() => handleSubmit(true)}
              ></Button>
              <Button
                value="Reject"
                variant="square-red"
                onClick={() => handleSubmit(false)}
              ></Button>
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

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
