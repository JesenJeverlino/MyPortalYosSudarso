import Header from "@/components/header";
import StudentDataFormOne from "@/components/student-data-form-1";
import StudentDataFormTwo from "@/components/student-data-form-2";

export default function UserStudentData() {
  return (
    <>
      <Header
        img="blush/studentdata-blush.png"
        value="Manage and update your data with ease!  🚀"
      ></Header>
      
      <StudentDataFormOne></StudentDataFormOne>
      <hr className="w-[90%] border-3 border-[#1952a6] mt-20" />
      <StudentDataFormTwo></StudentDataFormTwo>
    </>
  );
}
