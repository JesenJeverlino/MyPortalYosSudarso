import AdminHeader from "@/components/admin-header";
import StudentDataClassDropdownField from "@/components/student-data-component/student-data-form-component/student-data-class-dropdown-field";
import StudentDataSearchField from "@/components/student-data-component/student-data-form-component/student-data-search-field";
import StudentCard from "@/components/other-component/student-card";

export default function AdminStudentData() {
    const adaGak = true;

  return (
    <>
    <AdminHeader value="Student Data"></AdminHeader>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <StudentDataClassDropdownField></StudentDataClassDropdownField>
        <StudentDataSearchField></StudentDataSearchField>
        {adaGak ? (
        <div className="flex flex-col items-center">
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
          <StudentCard navigateTo="/admin-student-data-details"></StudentCard>
        </div>
          ) : (
            <h1 className="text-center mt-50 mb-50 text-[#1952a6] font-bold">"There are currently no students."</h1>
          )}
      </div>
    </>
  );
}