import AdminHeader from "@/components/admin-header";
import StudentDataClassDropdownField from "@/components/student-data-component/student-data-form-component/student-data-class-dropdown-field";
import StudentDataSearchField from "@/components/student-data-component/student-data-form-component/student-data-search-field";
import StudentCard from "@/components/other-component/student-card";

export default function AdminStudentData() {
  return (
    <>
    <AdminHeader value="Student Data"></AdminHeader>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <StudentDataClassDropdownField></StudentDataClassDropdownField>
        <StudentDataSearchField></StudentDataSearchField>
        <div className="flex flex-col items-center">
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
        </div>
      </div>
    </>
  );
}