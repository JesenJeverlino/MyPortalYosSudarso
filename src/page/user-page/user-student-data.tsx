import Header from "@/components/other-component/header";
import StudentDataGeneralForm from "@/components/student-data-component/student-data-general-form";
import StudentDataAuthForm from "@/components/student-data-component/student-data-auth-form";

export default function UserStudentData() {
  return (
    <>
      <Header
        img="blush/studentdata-blush.png"
        value="Manage and update your data with ease!  🚀"
      ></Header>

      <StudentDataGeneralForm></StudentDataGeneralForm>
      <hr className="w-[90%] border-3 border-[#1952a6] mt-20" />
      <StudentDataAuthForm></StudentDataAuthForm>
    </>
  );
}