import Sidebar from "@/components/sidebar";
import AdminStudentDataSectionOne from "@/components/admin-student-data-section-1";

export default function AdminStudentData() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
          <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">Student Data</h1>
          <AdminStudentDataSectionOne></AdminStudentDataSectionOne>
          </div>
        </main>
      </div>
    </>
  );
}
