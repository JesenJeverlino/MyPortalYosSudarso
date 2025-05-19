import StudentCard from "@/components/other-component/student-card";
import { useState, useEffect } from "react";
import { userStudentData_getAllPendingStudents } from "@/services/userStudentDataAPI";
import ClipLoader from "react-spinners/ClipLoader";

type PendingStudent = {
  fullname: string;
  nisn: string;
  imagePath: string;
  userId: string;
};

export default function AdminDashboardTwo({
  onCheckData,
}: {
  onCheckData: (hasData: boolean) => void;
}) {
  const [pendingStudents, setPendingStudents] = useState<PendingStudent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPendingStudents() {
      setLoading(true);
      try {
        const data = await userStudentData_getAllPendingStudents();
        setPendingStudents(data);
        onCheckData(true);
      } catch (error: any) {
        onCheckData(false);
      } finally {
        setLoading(false);
      }
    }

    fetchPendingStudents();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="text-2xl mt-4 mb-5">
          Pending Student Account Approvals
        </h1>
        <div className="flex flex-col items-center">
          {pendingStudents.map((student) => (
            <StudentCard
              key={student.userId}
              fullname={student.fullname}
              nisn={student.nisn}
              imagePath={student.imagePath}
              userId={student.userId}
              navigateTo="/admin-dashboard-pending-details"
            ></StudentCard>
          ))}
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}
    </>
  );
}
