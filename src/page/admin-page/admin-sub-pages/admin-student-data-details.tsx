import { Link } from "react-router-dom";
import AdminStudentDetailsForm from "@/components/other-component/admin-student-details-form";
import Table from "@/components/other-component/table";
import SquareDropdown from "@/components/other-component/square-dropdown";
import Button from "@/components/other-component/button";
import ButtonWithText from "@/components/other-component/button-with-text";
import { userStudentData_promoteDelete } from "@/services/userStudentDataAPI";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const dayMapping: Record<string, number> = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
};

export default function AdminStudentDataDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nisn = queryParams.get("nisn");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function approveReject(param: string) {
    setLoading(true);
    try {
      const res = await userStudentData_promoteDelete(param, nisn!);
      toast.success(res.message || "Action successful!", {
        onClose: () => {
          navigate("/admin-student-data");
        },
        autoClose: 300,
      });
    } catch (err: any) {
      toast.error(err.message || "Error", {
        onClose: () => {
          navigate("/admin-student-data");
        },
        autoClose: 300,
      });
    } finally {
      setLoading(false);
    }
  }

  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  function handleDayChange(selectedDay: string) {
    const dayNumber = dayMapping[selectedDay];
    setSelectedDayNumber(dayNumber);
  }

  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[900px]">
          <div className="mt-5 w-full flex">
            <div className="flex space-x-6">
              <Button
                onClick={() => approveReject("promote")}
                value="Promote"
                variant="square-green"
              ></Button>
              <Button
                onClick={() => approveReject("demote")}
                value="Demote"
                variant="square-red"
              ></Button>
            </div>
            <div className="ml-auto flex">
              <ButtonWithText
                onClick={() => approveReject("delete")}
              ></ButtonWithText>
              <Link to="/admin-student-data">
                <Button value="Back" variant="square-blue"></Button>
              </Link>
            </div>
          </div>
          <AdminStudentDetailsForm></AdminStudentDetailsForm>
          <hr className="border-2 border-[#5398ff] mt-5" />
          <SquareDropdown
            onChange={handleDayChange}
            label="Selected Courses"
            options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
          ></SquareDropdown>
          <Table nisn={nisn!} selectedDay={selectedDayNumber} canChoose={false}></Table>
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
