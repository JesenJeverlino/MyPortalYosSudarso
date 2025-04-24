import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import StudentDataFormOne from "@/components/student-data-form-1";
import StudentDataFormTwo from "@/components/student-data-form-2";

export default function UserStudentData() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <Header></Header>
            <StudentDataFormOne></StudentDataFormOne>
            <hr className="w-[90%] border-3 border-[#1952a6] mt-20"/>
            <StudentDataFormTwo></StudentDataFormTwo>
          </div>
        </main>
      </div>
    </>
  );
}
