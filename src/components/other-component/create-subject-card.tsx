import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { subject_update, subject_delete } from "@/services/subjectAPI";
import { CreateorUpdateSubjectReqDto } from "@/services/subjectAPI";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";

type CreateSubjectCardProps = {
  subjectId: number;
  subjectName: string;
  isMandatory: boolean;
  weeklyHours: number;
  currentGrade: 1 | 2 | 3;
  onDeleted?: () => void;
  setParentLoading: (loading: boolean) => void;
  loading?: boolean;
};

export default function CreateSubjectCard({
  subjectId,
  subjectName,
  isMandatory,
  weeklyHours,
  currentGrade,
  onDeleted,
  setParentLoading,
  loading,
}: CreateSubjectCardProps) {
  //modal
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(subjectName);
  const [mandatory, setMandatory] = useState(isMandatory);
  const [hours, setHours] = useState(weeklyHours);

  const updateSubjectMethods = useForm<CreateorUpdateSubjectReqDto>({
    defaultValues: {
      subjectName: subjectName,
      isMandatory: isMandatory,
      maxWeeklyHours: weeklyHours,
      forGrade: currentGrade,
    },
  });

  useEffect(() => {
    updateSubjectMethods.reset({
      subjectName: name,
      isMandatory: mandatory,
      maxWeeklyHours: hours,
      forGrade: currentGrade,
    });
  }, [currentGrade, name, mandatory, hours]);

  const handleSave = async (submitValues: CreateorUpdateSubjectReqDto) => {
    setParentLoading(true);
    try {
      await subject_update(subjectId, submitValues);
      setName(submitValues.subjectName);
      setMandatory(submitValues.isMandatory);
      setHours(submitValues.maxWeeklyHours);
      toast.success("Subject updated!");
      setIsOpen(false);
    } catch (err: any) {
      updateSubjectMethods.reset({
        subjectName: name,
        isMandatory: mandatory,
        maxWeeklyHours: hours,
        forGrade: currentGrade,
      });
      toast.error(err.message || "Failed to update");
      setIsOpen(false);
    } finally {
      setParentLoading(false);
    }
  };

  const handleDelete = async () => {
    setParentLoading(true);
    try {
      await subject_delete({ id: subjectId });
      toast.success("Subject deleted!");
      setIsOpen(false);
      if (onDeleted) onDeleted();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete");
      setIsOpen(false);
    } finally {
      setParentLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-[#1952a6] text-white font-bold flex md:w-[42%] w-[100%] h-[180px] cursor-pointer hover:opacity-70 flex flex-col relative"
      >
        <p className="2xl:text-3xl xl:text-2xl md:text-xl text-lg p-5 text-left flex-4">
          {name}
        </p>
        <p className="pl-5 font-extralight">
          Max Weekly Hours: <span className="font-bold">{hours} Hours</span>
        </p>
        <p className="pl-5 pb-5 font-extralight">
          IsMandatory:{" "}
          <span className="font-bold">{mandatory ? "Yes" : "No"}</span>
        </p>
        <Icon
          icon="mdi-pencil"
          className="w-[30px] h-[30px] absolute top-5 right-5"
        ></Icon>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-[#1952a6] mb-2">
              Edit Subject
            </h2>
            <FormProvider {...updateSubjectMethods}>
              <form onSubmit={updateSubjectMethods.handleSubmit(handleSave)}>
                <div>
                  <label className="block text-sm mb-1">Subject Name</label>
                  <input
                    type="text"
                    className="w-full border border-[#1952a6] rounded px-3 py-1"
                    {...updateSubjectMethods.register("subjectName")}
                  />
                </div>

                <div>
                  <label className="block text-sm mt-2">Is Mandatory</label>
                  <input
                    type="checkbox"
                    {...updateSubjectMethods.register("isMandatory")}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Max Weekly Hours</label>
                  <input
                    type="number"
                    step="0.1"
                    min={1}
                    {...updateSubjectMethods.register("maxWeeklyHours")}
                    className="w-full border border-[#1952a6] rounded px-3 py-1"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={loading}
                    className="text-[#E31B23] border border-[#E31B23] px-4 py-1 rounded hover:bg-[#E31B23] hover:text-white"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      updateSubjectMethods.reset({
                        subjectName: name,
                        isMandatory: mandatory,
                        maxWeeklyHours: hours,
                        forGrade: currentGrade,
                      });
                    }}
                    disabled={loading}
                    className="text-[#1952a6] border border-[#1952a6] px-4 py-1 rounded hover:bg-[#1952a6] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1952a6] text-white px-4 py-1 rounded hover:opacity-90"
                  >
                    Save
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </>
  );
}
