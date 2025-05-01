import StudentDataClassDropdownField from "@/components/student-data-component/student-data-form-component/student-data-class-dropdown-field";
import DashboardPendingCard from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-pending-card";
import StudentDataSearchField from "@/components/student-data-component/student-data-form-component/student-data-search-field";

export default function AdminStudentData() {
  return (
    <>
      <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">
        Student Data
      </h1>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <StudentDataClassDropdownField></StudentDataClassDropdownField>
        <StudentDataSearchField></StudentDataSearchField>
        <div className="flex flex-col items-center">
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
          <DashboardPendingCard></DashboardPendingCard>
        </div>
      </div>
    </>
  );
}
