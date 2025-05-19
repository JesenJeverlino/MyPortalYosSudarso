import UserHeader from "@/components/user-header";
import StudentDataGeneralForm from "@/components/student-data-component/student-data-general-form";
import StudentDataAuthForm from "@/components/student-data-component/student-data-auth-form";
import { userStudentData_getStudentDetails } from "@/services/userStudentDataAPI";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { StudentDetails } from "@/other/IStudentDetails";

export default function UserStudentData() {
  const loginInfo = localStorage.getItem("loginInfo");
  const nisn = loginInfo ? JSON.parse(loginInfo).nisn : null;

  const [studentDetails, setStudentDetails] = useState<StudentDetails>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudentDetails() {
      try {
        const data = await userStudentData_getStudentDetails(nisn!);
        setStudentDetails(data);
      } catch (error: any) {
        toast.error(error.message || "Error");
      } finally {
        setLoading(false);
      }
    }

    fetchStudentDetails();
  }, []);

  return (
    <>
      <UserHeader
        img="blush/studentdata-blush.png"
        value="Manage and update your data with ease!  🚀"
      ></UserHeader>
      <StudentDataGeneralForm></StudentDataGeneralForm>
      <hr className="w-[90%] border-3 border-[#1952a6] mt-20" />
      <StudentDataAuthForm defaultValues={studentDetails!}></StudentDataAuthForm>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
