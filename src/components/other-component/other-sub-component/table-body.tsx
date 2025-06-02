import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "@/other/authContext";
import { studentSchedules_getStudentSchedulesByNISN } from "@/services/studentSchedulesAPI";
import { schedule_getAllSchedule } from "@/services/scheduleAPI";
import ClipLoader from "react-spinners/ClipLoader";

type propsType = {
  selectedDay: number;
  nisn: string;
};

type Schedule = {
  scheduleId: number;
  dayofWeek: number;
  startTime: string;
  endTime: string;
  subjectName: string;
  teacherName: string;
  classroomName: string;
};

type StudentSchedule = {
  scheduleId: number;
};

export default function TableBody({ selectedDay, nisn }: propsType) {
  const { loginInfo } = useAuth();
  const [values, setValues] = useState<string[][]>([]);
  const [loading23, setLoading23] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!loginInfo) return;
      setLoading23(true);
      try {
        // 1. Dapatkan jadwal siswa berdasarkan nisn
        const studentSchedules: StudentSchedule[] =
          await studentSchedules_getStudentSchedulesByNISN(nisn);

        // 2. Dapatkan semua jadwal sesuai grade
        const allSchedules: Schedule[] = await schedule_getAllSchedule();

        // 3. Filter berdasarkan selectedDay dan jadwal yang sudah diambil siswa
        const filteredSchedules = allSchedules.filter(
          (schedule) =>
            schedule.dayofWeek === selectedDay &&
            studentSchedules.some((ss) => ss.scheduleId === schedule.scheduleId)
        );

        // 4. Filter biar dia mulai dari jam 8 dulu baru seterusnya
        const sortedSchedules = filteredSchedules.sort((a, b) => {
          if (a.startTime === b.startTime) {
            return a.endTime.localeCompare(b.endTime);
          }
          return a.startTime.localeCompare(b.startTime);
        });

        // 5. Mapping ke bentuk array string[][]
        const mappedValues = sortedSchedules.map((s, index) => [
          (index + 1).toString(),
          `${s.startTime} - ${s.endTime}`,
          s.subjectName,
          s.teacherName,
          s.classroomName,
        ]);

        setValues(mappedValues);
      } catch (error) {
        console.error("Error fetching schedules", error);
        setValues([]);
      } finally{
        setLoading23(false);
      }
    }

    fetchData();
  }, [loginInfo, selectedDay]);

  return (
    <>
      <tbody className="text-center font-medium">
        {values.length === 0 ? (
          <tr>
            <td colSpan={5} className="py-10 text-[#1952a6] font-bold">
              No schedules found for this student.
            </td>
          </tr>
        ) : (
          values.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                <td>
                  <hr
                    className={`border border-[#5398ff] w-full absolute left-1/2 -translate-x-1/2 ${
                      rowIndex === 0 ? "top-8" : ""
                    }`}
                  />
                </td>
              </tr>

              <tr>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="pt-5 pb-5">
                    {cell}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))
        )}
      </tbody>

      {loading23 && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}
    </>
  );
}
