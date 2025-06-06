import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CreateorUpdateClassroomReqDto } from "@/services/classroomAPI";
import { classroom_create } from "@/services/classroomAPI";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";

type CreateClassCardProps = {
  classroomId?: number;
  classroomName?: string;
  capacity?: number;
  variant: string;
  currentGrade: 1 | 2 | 3;
  setParentLoading: (loading: boolean) => void;
  reFetchClassrooms: () => void;
};

export default function CreateClassCard({
  classroomId,
  classroomName,
  capacity,
  variant,
  currentGrade,
  setParentLoading,
  reFetchClassrooms,
}: CreateClassCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //for creating class
  const methodsCreateClass = useForm<CreateorUpdateClassroomReqDto>({
    defaultValues: {
      classroomName: "",
      capacity: 0,
      forGrade: currentGrade!,
    },
  });

  useEffect(() => {
    methodsCreateClass.reset({
      classroomName: "",
      capacity: 0,
      forGrade: currentGrade!,
    });
  }, [currentGrade]);

  const onSubmitCreateClass = async (data: CreateorUpdateClassroomReqDto) => {
    setParentLoading(true);

    try {
      const res = await classroom_create(data);
      toast.success(res.message || "success!");
      setIsModalOpen(false);
      console.log("hi");
      reFetchClassrooms();
      methodsCreateClass.reset({
        classroomName: "",
        capacity: 0,
        forGrade: currentGrade!,
      });
    } catch (err: any) {
      toast.error(err.message || "failed");
    } finally {
      setParentLoading(false);
    }
  };

  return (
    <>
      {variant == "blue" ? (
        <Link
          to={`/admin-class-details?id=${classroomId}`}
          className="bg-[#1952a6] text-white font-bold flex md:w-[42%] w-[100%] h-[160px] cursor-pointer hover:opacity-70"
        >
          <p className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl p-5 text-left flex-4">
            Class {classroomName}
          </p>
          <div className="flex-1 flex flex-col items-end justify-between p-2 pr-5">
            <Icon icon="mdi-pencil" className="w-[30px] h-[30px]"></Icon>
            <p className="text-lg">{capacity}/70</p>
          </div>
        </Link>
      ) : (
        <>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="bg-[#d9d9d9] text-black font-bold flex items-center justify-center md:w-[42%] w-[100%] h-[160px] cursor-pointer hover:opacity-50"
          >
            <Icon
              icon="ic:outline-plus"
              className="h-auto sm:w-[100px] w-[70px] "
            ></Icon>
            <p className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl p-5 text-left">
              New Class
            </p>
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow w-[90%] max-w-md">
                <h2 className="text-lg font-bold mb-4 text-[#1952a6]">
                  Create New Class
                </h2>
                <FormProvider {...methodsCreateClass}>
                  <form
                    onSubmit={methodsCreateClass.handleSubmit(
                      onSubmitCreateClass
                    )}
                  >
                    <input
                      type="text"
                      placeholder="Class Name"
                      className="border border-[#1952a6] p-2 w-full mb-3 rounded"
                      {...methodsCreateClass.register("classroomName", {
                        required: true,
                      })}
                    />
                    <input
                      type="number"
                      placeholder="Max Capacity"
                      className="border border-[#1952a6] p-2 w-full mb-3 rounded"
                      {...methodsCreateClass.register("capacity", {
                        required: true,
                      })}
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          methodsCreateClass.reset({
                            classroomName: "",
                            capacity: 0,
                            forGrade: currentGrade!,
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
        </>
      )}
    </>
  );
}
