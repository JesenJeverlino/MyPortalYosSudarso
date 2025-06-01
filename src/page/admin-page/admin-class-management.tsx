import AdminHeader from "@/components/admin-header";
import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";
import CreateClassCard from "@/components/other-component/create-class-card";
import CreateSubjectCard from "@/components/other-component/create-subject-card";
import Button from "@/components/other-component/button";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm, FormProvider } from "react-hook-form";
import { CreateorUpdateSubjectReqDto } from "@/services/subjectAPI";
import { subject_create, subject_getAllSubjects } from "@/services/subjectAPI";
import { classroom_getAllClassroom } from "@/services/classroomAPI";
import {
  krsControl_updateStatus,
  krsControl_getStatus,
} from "@/services/krsControlAPI";

type Subject = {
  subjectId: number;
  subjectName: string;
  isMandatory: boolean;
  maxWeeklyHours: number;
  forGrade: 1 | 2 | 3;
  schedules: any[];
};

type Classroom = {
  classroomId: number;
  classroomName: string;
  capacity: number;
  forGrade: 1 | 2 | 3;
  schedules: any[];
};

export default function AdminClassManagement() {
  const [loading, setLoading] = useState(false);
  const [isSelectionEnabled, setIsSelectionEnabled] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await krsControl_getStatus();
        setIsSelectionEnabled(res.isEnabled);
      } catch (err) {
        console.error("Failed to fetch status:", err);
      }
    }

    fetchStatus();
  }, []);

  const handleToggle = async () => {
    if (isSelectionEnabled === null) return;

    setLoading(true);
    try {
      const newStatus = !isSelectionEnabled;
      console.log(newStatus);
      await krsControl_updateStatus(newStatus);
      setIsSelectionEnabled(newStatus);
      toast.success(
        newStatus ? "Enabled successfully!" : "Disabled successfully!"
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setLoading(false);
    }
  };

  //handle choose grade button
  const [activeGrade, setActiveGrade] = useState<1 | 2 | 3>(1);
  const handleChooseGrade = (grade: number) => {
    setActiveGrade(grade as 1 | 2 | 3);
  };

  //get all subject
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const filteredSubjects = subjects.filter(
    (subject) => subject.forGrade === activeGrade
  );
  async function fetchSubjects() {
    try {
      const data = await subject_getAllSubjects();
      setSubjects(data);
    } catch (error) {
      setSubjects([]);
    }
  }

  useEffect(() => {
    fetchSubjects();
  }, []);

  //modal for create subject
  const [isModalOpen, setIsModalOpen] = useState(false);

  // methods for creating subject
  const methods = useForm<CreateorUpdateSubjectReqDto>({
    defaultValues: {
      subjectName: "",
      isMandatory: true,
      maxWeeklyHours: 0,
      forGrade: activeGrade!,
    },
  });

  useEffect(() => {
    methods.reset({
      subjectName: "",
      isMandatory: true,
      maxWeeklyHours: 0,
      forGrade: activeGrade!,
    });
  }, [activeGrade]);

  //function for creating subject
  const onSubmitCreate = async (data: CreateorUpdateSubjectReqDto) => {
    setLoading(true);

    try {
      const res = await subject_create(data);
      toast.success(res.message || "success!");
      setIsModalOpen(false);
      fetchSubjects();
      methods.reset({
        subjectName: "",
        isMandatory: true,
        maxWeeklyHours: 0,
        forGrade: activeGrade!,
      });
    } catch (err: any) {
      toast.error(err.message || "failed");
    } finally {
      setLoading(false);
    }
  };

  //getAllClasses
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const filteredClassrooms = classrooms.filter(
    (classroom) => classroom.forGrade === activeGrade
  );
  async function fetchClassrooms() {
    try {
      const data = await classroom_getAllClassroom();
      setClassrooms(data);
    } catch (error) {
      setClassrooms([]);
    }
  }

  useEffect(() => {
    fetchClassrooms();
  }, []);

  function renderAfterCreateClass() {
    fetchClassrooms();
  }

  return (
    <>
      <AdminHeader value="Class Management"></AdminHeader>

      <div className="mt-20 flex flex-col gap-20 w-[90%] overflow-hidden">
        <div className="xl:w-[100%] md:w-[120%] sm:w-[150%] w-[200%]">
          <div className="flex gap-3">
            <ChooseDayCard
              value="10"
              isActive={activeGrade === 1}
              onClick={() => handleChooseGrade(1)}
            ></ChooseDayCard>
            <ChooseDayCard
              value="11"
              isActive={activeGrade === 2}
              onClick={() => handleChooseGrade(2)}
            ></ChooseDayCard>
            <ChooseDayCard
              value="12"
              isActive={activeGrade === 3}
              onClick={() => handleChooseGrade(3)}
            ></ChooseDayCard>
          </div>
        </div>

        <div className="flex items-center">
          <p className="m-5 text-[#1952a6] sm:text-2xl text-xl font-bold flex-grow text-right">
            Allow KRS Submission
          </p>
          <Button
            onClick={handleToggle}
            value={isSelectionEnabled ? "Disable" : "Enable"}
            variant={isSelectionEnabled ? "square-yellow" : "square-blue"}
          ></Button>
        </div>

        <div>
          {filteredClassrooms.length > 0 ? (
            <p className="text-[#1952a6] text-lg font-bold text-left mb-5">
              Viewing Classes...
            </p>
          ) : (
            <p className="text-[#1952a6] text-lg font-bold text-left mb-5">
              Start Creating Classes...
            </p>
          )}
          <div className="flex flex-wrap justify-between gap-5 sm:flex-row flex-col">
            {filteredClassrooms.length > 0 ? (
              <>
                {filteredClassrooms.map((classroom) => (
                  <CreateClassCard
                    reFetchClassrooms={() => {}}
                    key={classroom.classroomId}
                    classroomId={classroom.classroomId}
                    classroomName={classroom.classroomName}
                    capacity={classroom.capacity}
                    currentGrade={activeGrade}
                    setParentLoading={setLoading}
                    variant="blue"
                  ></CreateClassCard>
                ))}
                <CreateClassCard
                  reFetchClassrooms={renderAfterCreateClass}
                  currentGrade={activeGrade}
                  setParentLoading={setLoading}
                  variant="whitoss"
                ></CreateClassCard>
              </>
            ) : (
              <CreateClassCard
                reFetchClassrooms={renderAfterCreateClass}
                currentGrade={activeGrade}
                setParentLoading={setLoading}
                variant="whitoss"
              ></CreateClassCard>
            )}
          </div>
        </div>

        <hr className="border-3 border-[#5398ff] w-[100%]" />

        <div className="flex items-center">
          <p className="m-5 text-[#1952a6] sm:text-2xl text-xl font-bold flex-grow text-right">
            Create Subject
          </p>
          <Button
            value="Add"
            variant="square-blue"
            onClick={() => setIsModalOpen(true)}
          ></Button>
        </div>

        {filteredSubjects.length > 0 ? (
          <div>
            <p className="text-[#1952a6] text-lg font-bold text-left mb-5">
              Viewing Classes...
            </p>
            <div className="flex flex-wrap justify-between gap-5 sm:flex-row flex-col">
              {filteredSubjects.map((subject) => (
                <CreateSubjectCard
                  key={subject.subjectId}
                  subjectId={subject.subjectId}
                  subjectName={subject.subjectName}
                  isMandatory={subject.isMandatory}
                  weeklyHours={subject.maxWeeklyHours}
                  currentGrade={activeGrade}
                  onDeleted={fetchSubjects}
                  setParentLoading={setLoading}
                  loading={loading}
                />
              ))}
            </div>
          </div>
        ) : (
          <h1 className="text-center mt-50 mb-50 text-[#1952a6] font-bold">
            "There are currently no subject to display."
          </h1>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4 text-[#1952a6]">
              Create New Subject
            </h2>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmitCreate)}>
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="border border-[#1952a6] p-2 w-full mb-3 rounded"
                  {...methods.register("subjectName", { required: true })}
                />
                <input
                  type="number"
                  step="0.1"
                  placeholder="Max Weekly Hours"
                  className="border border-[#1952a6] p-2 w-full mb-3 rounded"
                  {...methods.register("maxWeeklyHours", {
                    required: true,
                    min: 1,
                  })}
                />
                <div className="flex items-center gap-5 mb-3">
                  <label>IsMandatory?</label>
                  <input type="checkbox" {...methods.register("isMandatory")} />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      methods.reset({
                        subjectName: "",
                        isMandatory: true,
                        maxWeeklyHours: 0,
                        forGrade: activeGrade!,
                      });
                      setIsModalOpen(false);
                    }}
                    className="border border-[#1952a6] text-[#1952a6] px-3 py-1 rounded cursor-pointer hover:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1952a6] text-white px-3 py-1 rounded cursor-pointer hover:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
