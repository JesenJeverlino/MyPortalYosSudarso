import AdminHeader from "@/components/admin-header";
import StudentDataClassDropdownField from "@/components/student-data-component/student-data-form-component/student-data-class-dropdown-field";
import StudentDataSearchField from "@/components/student-data-component/student-data-form-component/student-data-search-field";
import StudentCard from "@/components/other-component/student-card";
import { useState, useEffect } from "react";
import { userStudentData_getAllActiveStudents } from "@/services/userStudentDataAPI";
import ClipLoader from "react-spinners/ClipLoader";

type ActiveStudent = {
  fullname: string;
  nisn: string;
  imagePath: string;
  userId: string;
  grade: number;
};

export default function AdminStudentData() {
  const [adaGak, setAdaGak] = useState(true);
  const [loading, setLoading] = useState(false);

  const [activeStudents, setActiveStudents] = useState<ActiveStudent[]>([]);

  useEffect(() => {
    async function fetchActiveStudents() {
      setLoading(true);
      try {
        const data = await userStudentData_getAllActiveStudents();
        setActiveStudents(data);
        setAdaGak(true);
      } catch (error: any) {
        setAdaGak(false);
      } finally {
        setLoading(false);
      }
    }

    fetchActiveStudents();
  }, []);

  const [selectedClass, setSelectedClass] = useState("");
  const [searchText, setSearchText] = useState("");

  const filteredStudents = activeStudents.filter((student) => {
    const gradeMatch = selectedClass
      ? student.grade.toString() === selectedClass
      : true;

    const searchMatch = student.fullname
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return gradeMatch && searchMatch;
  });

  return (
    <>
      <AdminHeader value="Student Data"></AdminHeader>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <StudentDataClassDropdownField
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        ></StudentDataClassDropdownField>
        <StudentDataSearchField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></StudentDataSearchField>
        {adaGak ? (
          <div className="flex flex-col items-center">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.userId}
                fullname={student.fullname}
                nisn={student.nisn}
                imagePath={student.imagePath}
                userId={student.userId}
                navigateTo="/admin-student-data-details"
              ></StudentCard>
            ))}
          </div>
        ) : (
          <h1 className="text-center mt-50 mb-50 text-[#1952a6] font-bold">
            "There are currently no active students."
          </h1>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}
    </>
  );
}
