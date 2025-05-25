import UserHeader from "@/components/user-header";
import StudentDataGeneralForm from "@/components/student-data-component/student-data-general-form";
import StudentDataAuthForm from "@/components/student-data-component/student-data-auth-form";
import { ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

export default function UserStudentData() {
   const [loading, setLoading] = useState(false);

  return (
    <>
      <UserHeader
        img="blush/studentdata-blush.png"
        value="Manage and update your data with ease!  🚀"
      ></UserHeader>
      <StudentDataGeneralForm setLoading={setLoading} isLoading={loading}></StudentDataGeneralForm>
      <hr className="w-[90%] border-3 border-[#1952a6] mt-20" />
      <StudentDataAuthForm setLoading={setLoading} isLoading={loading}></StudentDataAuthForm>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
