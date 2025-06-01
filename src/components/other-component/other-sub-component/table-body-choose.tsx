import { useState, useEffect } from "react";
import TableHead from "./table-head";
import { schedule_getAllScheduleByGrade } from "@/services/scheduleAPI";
import { useAuth } from "@/other/authContext";
import {
  studentSchedules_selectSchedules,
  studentSchedules_getStudentSchedulesByschedulesId,
  studentSchedules_getStudentSchedulesByNISN,
} from "@/services/studentSchedulesAPI";
import Button from "../button";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

type Schedule = {
  scheduleId: number;
  dayofWeek: number;
  startTime: string;
  endTime: string;
  teacherName: string;
  subjectName: string;
  subjectId: number;
  classroomName: string;
  classroomId: number;

  joinedCount?: number;
  capacity?: number;
};

export default function TableBodyChoose({
  selectedDay,
}: {
  selectedDay: number;
}) {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { loginInfo } = useAuth();
  const [activeIndices, setActiveIndices] = useState<
    Record<number, number | null>
  >({});
  const [defaultActiveIndices, setDefaultActiveIndices] = useState<
    Record<number, number | null>
  >({});

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  // Handle checkbox toggle
  const handleChange = (rowIndex: number, subjectIndex: number) => {
    setActiveIndices((prev) => {
      if (prev[rowIndex] === subjectIndex) {
        return { ...prev, [rowIndex]: null };
      } else {
        return { ...prev, [rowIndex]: subjectIndex };
      }
    });
  };

  async function fetchSchedules() {
    setLoading(true);
    try {
      const data = await schedule_getAllScheduleByGrade(loginInfo!.grade);
      const filteredData = data.filter(
        (s: Schedule) => s.dayofWeek === selectedDay
      );

      // Ambil jumlah siswa yang sudah join tiap schedule
      const schedulesWithJoinedCount = await Promise.all(
        filteredData.map(async (schedule: Schedule) => {
          try {
            const res = await studentSchedules_getStudentSchedulesByschedulesId(
              schedule.scheduleId
            );
            const joinedCount = Array.isArray(res) ? res.length : 0;
            return { ...schedule, joinedCount };
          } catch (err: any) {
            return { ...schedule, joinedCount: 0 };
          }
        })
      );

      // Ambil jadwal yang sudah dipilih siswa, dengan handling error jika tidak ada data
      let selectedSchedules: Schedule[] = [];
      setLoading(true);
      try {
        selectedSchedules = await studentSchedules_getStudentSchedulesByNISN(
          loginInfo!.nisn
        );
        if (!Array.isArray(selectedSchedules)) selectedSchedules = [];
      } catch (error) {
        // Kalau error (misal 404 NotFound), set jadi array kosong supaya tidak error
        selectedSchedules = [];
      }

      // Buat set scheduleId yang sudah dipilih
      const selectedScheduleIds = new Set(
        selectedSchedules.map((s) => s.scheduleId)
      );
      // Cari kelas dan waktu unik
      const uniqueClassrooms = Array.from(
        new Set(schedulesWithJoinedCount.map((s) => s.classroomName))
      ).sort();

      const uniqueTimes: TimeSlot[] = Array.from(
        new Map(
          schedulesWithJoinedCount.map((s) => [
            `${s.startTime}-${s.endTime}`,
            { startTime: s.startTime, endTime: s.endTime },
          ])
        ).values()
      ).sort((a, b) => a.startTime.localeCompare(b.startTime));

      // Buat defaultActiveIndices berdasarkan jadwal yang sudah dipilih siswa
      const defaultActiveIndices: Record<number, number | null> = {};

      uniqueTimes.forEach((timeSlot, rowIndex) => {
        for (
          let classroomIndex = 0;
          classroomIndex < uniqueClassrooms.length;
          classroomIndex++
        ) {
          const classroomName = uniqueClassrooms[classroomIndex];
          const schedule = schedulesWithJoinedCount.find(
            (s) =>
              s.startTime === timeSlot.startTime &&
              s.endTime === timeSlot.endTime &&
              s.classroomName === classroomName &&
              selectedScheduleIds.has(s.scheduleId)
          );
          // console.log(schedulesWithJoinedCount);
          if (schedule) {
            defaultActiveIndices[rowIndex] = classroomIndex;
            break; // hanya 1 checkbox aktif per baris
          }
        }
      });

      // Update state
      setSchedules(schedulesWithJoinedCount);
      setActiveIndices(defaultActiveIndices);
      setDefaultActiveIndices(defaultActiveIndices);
    } catch (error) {
      // Kalau error fatal, reset state biar UI tetap jalan
      setSchedules([]);
      setActiveIndices({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSchedules();
  }, [selectedDay]);

  // Ambil kelas unik (header kolom selain "No" dan "Time")
  const uniqueClassrooms = Array.from(
    new Set(schedules.map((s) => s.classroomName))
  ).sort();

  // Ambil waktu unik, urutkan berdasarkan startTime
  type TimeSlot = { startTime: string; endTime: string };
  const uniqueTimes: TimeSlot[] = Array.from(
    new Map(
      schedules.map((s) => [
        `${s.startTime}-${s.endTime}`,
        { startTime: s.startTime, endTime: s.endTime },
      ])
    ).values()
  ).sort((a, b) => a.startTime.localeCompare(b.startTime));

  function getSelectedScheduleIds(): number[] {
    const selectedIds: number[] = [];

    for (const [rowIndexStr, classroomIndex] of Object.entries(activeIndices)) {
      if (classroomIndex !== null) {
        const rowIndex = Number(rowIndexStr);
        const timeSlot = uniqueTimes[rowIndex];
        const classroomName = uniqueClassrooms[classroomIndex];

        const schedule = schedules.find(
          (s) =>
            s.classroomName === classroomName &&
            s.startTime === timeSlot.startTime &&
            s.endTime === timeSlot.endTime
        );
        if (schedule) {
          selectedIds.push(schedule.scheduleId);
        }
      }
    }
    return selectedIds;
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const selectedScheduleIds = getSelectedScheduleIds();

      if (selectedScheduleIds.length === 0) {
        toast.error("Choose At Least One!");
        return;
      }

      // Buat array of objects untuk dikirim sekaligus
      const payload = selectedScheduleIds.map((id) => ({
        nisn: loginInfo!.nisn,
        scheduleId: id,
      }));

      // Kirim satu kali ke
      const res = await studentSchedules_selectSchedules(payload);

      toast.success(res.message || "success!");
      setActiveIndices({});
      // reload data termasuk joinedCount
      fetchSchedules();
    } catch (error: any) {
      toast.error(error.message || "error!");
      setActiveIndices(defaultActiveIndices);
    } finally {
      setLoading(false);
      setIsEdit(false);
    }
  }

  return (
    <>
      <div className="w-full overflow-x-auto pb-5">
        <div className="rounded-[30px] border-3 border-[#1952a6] p-5 pb-0 min-w-[800px]">
          <table className="w-full relative">
            <TableHead values={["No", "Time", ...uniqueClassrooms]}></TableHead>
            <tbody className="text-center font-medium">
              <tr>
                <td>
                  <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8" />
                </td>
              </tr>
              {uniqueTimes.map((timeSlot, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="pt-5 pb-5">{rowIndex + 1}</td>
                  <td className="pt-5 pb-5">{`${timeSlot.startTime} - ${timeSlot.endTime}`}</td>
                  {uniqueClassrooms.map((classroomName, classroomIndex) => {
                    const scheduleForCell = schedules.find(
                      (s) =>
                        s.classroomName === classroomName &&
                        s.startTime === timeSlot.startTime &&
                        s.endTime === timeSlot.endTime
                    );
                    const displayJoinedCount =
                      scheduleForCell?.joinedCount ?? 0;

                    return (
                      <td key={classroomIndex} className="pt-5 pb-5">
                        {scheduleForCell ? (
                          <>
                            <input
                              disabled={!isEdit}
                              type="checkbox"
                              className="mr-2"
                              checked={
                                activeIndices[rowIndex] === classroomIndex
                              }
                              onChange={() =>
                                handleChange(rowIndex, classroomIndex)
                              }
                            />
                            <p className="mr-1 inline">
                              {scheduleForCell.subjectName}
                            </p>
                            <p className="text-xs font-extralight inline">
                              ({displayJoinedCount} /
                              {scheduleForCell.capacity ?? "-"})
                            </p>
                          </>
                        ) : (
                          "-"
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        {isEdit ? (
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="square-blue"
            value="OK"
          />
        ) : (
          <button
            className={`cursor-pointer bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70`}
            onClick={() => setIsEdit(true)}
            type="button"
            disabled={loading}
          >
            Edit
          </button>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
