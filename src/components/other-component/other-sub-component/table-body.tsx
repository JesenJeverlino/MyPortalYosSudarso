import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "@/other/authContext";
import { studentSchedules_getStudentSchedulesByNISN } from "@/services/studentSchedulesAPI";
import { schedule_getAllSchedule } from "@/services/scheduleAPI";

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

  useEffect(() => {
    async function fetchData() {
      if (!loginInfo) return;

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

        // 4. Mapping ke bentuk array string[][]
        const mappedValues = filteredSchedules.map((s, index) => [
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
      }
    }

    fetchData();
  }, [loginInfo, selectedDay]);

  return (
    <>
      <tbody className="text-center font-medium">
        {values.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <hr
              className={`border border-[#5398ff] w-full absolute left-1/2 -translate-x-1/2 ${
                rowIndex === 0 ? "top-8" : ""
              }`}
            />
            <tr>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="pt-5 pb-5">
                  {cell}
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </>
  );
}
