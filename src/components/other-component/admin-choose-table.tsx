import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { Icon } from "@iconify/react";
import { subject_getAllSubjects } from "@/services/subjectAPI";
import { schedule_getAllScheduleByClassroomId } from "@/services/scheduleAPI";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import TableHead from "./other-sub-component/table-head";
import { schedule_sync } from "@/services/scheduleAPI";
import { toast } from "react-toastify";
import { syncScheduleDto } from "@/services/scheduleAPI";
import SquareDropdown from "./square-dropdown";
import { StudentDetails } from "@/other/IStudentDetails";
import { userStudentData_getStudentDetails } from "@/services/userStudentDataAPI";
import { studentSchedules_getStudentSchedulesByschedulesId } from "@/services/studentSchedulesAPI";

type Subject = {
  subjectId: number;
  subjectName: string;
  isMandatory: boolean;
  maxWeeklyHours: number;
  forGrade: 1 | 2 | 3;
  schedules: any[];
};

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
};

type AdminChooseTableProps = {
  currentDay: number;
  classroomId: number;
  forGrade: number;
  capacity: number;
  setParentLoading: (loading: boolean) => void;
};

type ScheduleFormItem = {
  scheduleId: number;
  startTime: string;
  endTime: string;
  teacherName: string;
  subjectId: number;
};

type ScheduleFormValues = {
  schedules: ScheduleFormItem[];
};

export default function AdminChooseTable({
  currentDay,
  classroomId,
  forGrade,
  capacity,
  setParentLoading,
}: AdminChooseTableProps) {
  const [isEdit, setIsEdit] = useState(true);

  //Get All Subject and filter by grade
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const filteredSubjects = subjects.filter(
    (subject) => subject.forGrade === forGrade
  );

  async function fetchSubjects() {
    try {
      const data = await subject_getAllSubjects();
      setSubjects(data);
    } catch (error) {
      setSubjects([]);
    }
  }

  const methods = useForm<ScheduleFormValues>({
    defaultValues: {
      schedules: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "schedules",
  });

  //get all schedules by classroomId
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  async function fetchSchedules() {
    try {
      const data = await schedule_getAllScheduleByClassroomId(classroomId);
      const filteredData = data.filter(
        (s: Schedule) => s.dayofWeek === currentDay
      );
      setSchedules(filteredData);
      const schedulesForForm = filteredData.map((item: Schedule) => ({
        scheduleId: item.scheduleId,
        startTime: item.startTime,
        endTime: item.endTime,
        subjectId: item.subjectId,
        teacherName: item.teacherName,
      }));

      // Reset form dengan data baru
      methods.reset({ schedules: schedulesForForm });

      if (data.length === 0) setIsEdit(false);
    } catch (error) {
      setSchedules([]);
      setIsEdit(false);
    }
  }

  useEffect(() => {
    fetchSubjects();
  }, []);

  useEffect(() => {
    fetchSchedules();
  }, [currentDay]);

  const onSubmit = async (data: ScheduleFormValues) => {
    setParentLoading(true);
    const payload: syncScheduleDto[] = data.schedules.map((schedule) => ({
      ...schedule,
      dayofWeek: currentDay,
      classroomId: classroomId,
      scheduleId: schedule.scheduleId ?? 0,
    }));
    try {
      const res = await schedule_sync(payload);
      setIsEdit(true);
      toast.success(res.message || "success!");
      fetchSchedules();
    } catch (error: any) {
      toast.error(error.message || "success!");
    } finally {
      setParentLoading(false);
    }
  };

  // untuk dropdown
  // const subjectOptions = ["Mathematics", "Physics", "Chemistry", "Biology"];

  //bagina untuk tampilin siapa2 aja yang enroll kelas tersebut!
  const subjectOptions = filteredSubjects.map((subj) => subj.subjectName);
  const timeOptions = schedules.map((s) => ({
    label: `${s.startTime.slice(0, 5)} - ${s.endTime.slice(0, 5)}`,
    value: s.scheduleId.toString(),
  }));

  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
    null
  );
  const [enrolledStudents, setEnrolledStudents] = useState<StudentDetails[]>(
    []
  );

  useEffect(() => {
    if (schedules.length > 0 && selectedScheduleId === null) {
      setSelectedScheduleId(schedules[0].scheduleId);
    }
  }, [schedules]);

  useEffect(() => {
    if (!selectedScheduleId) return;

    const fetchEnrolledStudents = async () => {
      try {
        // 1. Dapatkan daftar siswa yang terdaftar di jadwal ini
        const studentSchedules =
          await studentSchedules_getStudentSchedulesByschedulesId(
            selectedScheduleId
          );
        const nisns = studentSchedules.map((s: any) => s.studentNISN);
        // 2. Fetch detail siswa berdasarkan NISN
        const detailPromises = nisns.map((nisn: string) =>
          userStudentData_getStudentDetails(nisn)
        );
        const studentDetails = await Promise.all(detailPromises);

        setEnrolledStudents(studentDetails);
      } catch (error) {
        toast.error("Failed to fetch enrolled students.");
        setEnrolledStudents([]);
      }
    };

    fetchEnrolledStudents();
  }, [selectedScheduleId, currentDay]);

  return (
    <>
      <div className="w-full rounded-[30px] border-3 border-[#1952a6] p-5 pb-0">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <table className="w-full relative">
              <TableHead
                values={["No", "Time", "Subject", "Teacher"]}
              ></TableHead>
              {classroomId !== 0 ? (
                <tbody className="text-center font-medium">
                  <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8" />
                  {fields.map((field, index) => (
                    <tr key={field.id} className="border-b-2 border-[#5398ff]">
                      <td className="pt-5 pb-5">{index + 1}</td>
                      <td className="pt-5 pb-5">
                        <div className="flex justify-center items-center gap-2">
                          <input
                            disabled={isEdit}
                            type="time"
                            {...methods.register(
                              `schedules.${index}.startTime`
                            )}
                            className={`rounded ${
                              isEdit ? "border" : "border border-[#5398ff]"
                            }`}
                          />
                          <span className="text-sm">to</span>
                          <input
                            disabled={isEdit}
                            type="time"
                            {...methods.register(`schedules.${index}.endTime`)}
                            className={`rounded ${
                              isEdit ? "border" : "border border-[#5398ff]"
                            }`}
                          />
                        </div>
                      </td>
                      <td className="pt-5 pb-5 flex justify-center">
                        <div className="relative">
                          <select
                            disabled={isEdit}
                            {...methods.register(
                              `schedules.${index}.subjectId`,
                              {
                                valueAsNumber: true,
                              }
                            )}
                            className={`pl-1 pr-5 rounded appearance-none ${
                              isEdit ? "border" : "border border-[#5398ff]"
                            }`}
                          >
                            <option value="" disabled>
                              Select Subject...
                            </option>
                            {filteredSubjects.map((subj) => (
                              <option
                                key={subj.subjectId}
                                value={subj.subjectId}
                              >
                                {subj.subjectName}
                              </option>
                            ))}
                          </select>
                          <Icon
                            icon="mingcute:down-fill"
                            className="w-[20px] h-[20px] text-[#5398ff] absolute right-0 top-1/2 transform -translate-y-1/2"
                          />
                        </div>
                      </td>
                      <td className="pt-5 pb-5">
                        <input
                          required
                          disabled={isEdit}
                          type="text"
                          {...methods.register(
                            `schedules.${index}.teacherName`
                          )}
                          className={`pl-1 rounded ${
                            isEdit ? "border" : "border border-[#5398ff]"
                          }`}
                          placeholder="type here..."
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={6}>
                      <div className="flex justify-end gap-4 py-4">
                        {!isEdit ? (
                          <>
                            {fields.length > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(fields.length - 1)}
                                className="flex items-center gap-1 text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-100"
                              >
                                <Minus size={16} />
                                Remove
                              </button>
                            )}
                            <button
                              type="button"
                              // onClick={addRow}
                              onClick={() =>
                                append({
                                  scheduleId: 0,
                                  startTime: "",
                                  endTime: "",
                                  subjectId: 0, // default kosong
                                  teacherName: "",
                                })
                              }
                              className="flex items-center gap-1 text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-100"
                            >
                              <Plus size={16} />
                              Add
                            </button>
                            <button
                              type="submit"
                              className="flex items-center gap-1 text-white bg-[#1952a6] px-4 py-1.5 rounded hover:bg-blue-800"
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <button
                            className={`cursor-pointer bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70`}
                            onClick={() => setIsEdit(false)}
                            type="button"
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <h1 className="text-red-500 text-end text-xl font-bold">
                  ERROR - Failed to fetch classroomId!
                </h1>
              )}
            </table>
          </form>
        </FormProvider>
      </div>
      <div className="flex items-end">
        <SquareDropdown
          label="Class Roster"
          options={timeOptions.map((opt) => opt.label)}
          onChange={(selectedLabel) => {
            const matched = timeOptions.find(
              (opt) => opt.label === selectedLabel
            );
            if (matched) {
              setSelectedScheduleId(Number(matched.value));
            }
          }}
        ></SquareDropdown>
        <p className="text-right text-[#1952a6]">
          {enrolledStudents.length} / {capacity} students
        </p>
      </div>
      {enrolledStudents.map((student) => (
        <div className="flex items-center p-2 border border-[#1952a6] text-[#1952a6] font-bold mb-5 gap-5">
          <img
            src={
              student
                ? `https://localhost:44364/${student.imagePath}`
                : "/default.jpg"
            }
            className="w-[8%] h-auto rounded-full"
          />
          <h1 className="flex-start text-2xl w-[70%] text-left">
            {student.fullname} ({student.nisn})
          </h1>
        </div>
      ))}
    </>
  );
}
