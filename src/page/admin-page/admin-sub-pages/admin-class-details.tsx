import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SquareDropdown from "@/components/other-component/square-dropdown";
import Button from "@/components/other-component/button";
import ButtonWithText from "@/components/other-component/button-with-text";
import TableHead from "@/components/other-component/other-sub-component/table-head";
import AdminChooseTable from "@/components/other-component/admin-choose-table";
import { useLocation } from "react-router-dom";
import { classroom_getAllClassroomDetails } from "@/services/classroomAPI";
import { useState, useEffect } from "react";
import { classroom_update } from "@/services/classroomAPI";
import { CreateorUpdateClassroomReqDto } from "@/services/classroomAPI";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { classroom_delete } from "@/services/classroomAPI";
import { useNavigate } from "react-router-dom";

type Classroom = {
  classroomId: number;
  classroomName: string;
  capacity: number;
  forGrade: 1 | 2 | 3;
  schedules: any[];
};

export default function AdminClassDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classroomIdParam = queryParams.get("id");
  const classroomId = Number(classroomIdParam);

  const [loading, setLoading] = useState(false);

  //get classroom details
  const [classroomDetails, setClassroomDetails] = useState<Classroom | null>({
    classroomId: 0,
    classroomName: "",
    capacity: 0,
    forGrade: 1,
    schedules: [],
  });

  async function fetchClassroomDetails() {
    setLoading(true);
    try {
      const data = await classroom_getAllClassroomDetails({ id: classroomId });
      setClassroomDetails(data);
      setCapacity(data.capacity);
      setClassName(data.classroomName);
    } catch (error) {
      setClassroomDetails(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClassroomDetails();
  }, []);

  //update clasroom details
  const [isEditisEditableCapacity, setIsEditableCapacity] = useState(false);
  const [capacity, setCapacity] = useState(
    classroomDetails?.capacity.toString() || ""
  );

  const [isEditisEditableClassName, setIsEditableClassName] = useState(false);
  const [className, setClassName] = useState(
    classroomDetails?.classroomName || ""
  );

  const handleEditClickCapacity = async () => {
    if (isEditisEditableCapacity) {
      const updatedData: CreateorUpdateClassroomReqDto = {
        classroomName: className,
        capacity: Number(capacity),
        forGrade: classroomDetails!.forGrade,
      };
      setLoading(true);
      try {
        const res = await classroom_update(classroomId, updatedData);
        // setCapacity(capacity);
        toast.success(res.message || "success!");
      } catch (err: any) {
        setCapacity(classroomDetails?.capacity.toString() || "");
        toast.error(err.message || "failed");
      } finally {
        setLoading(false);
      }
    }
    setIsEditableCapacity((prev) => !prev);
  };

  const handleEditClickClassName = async () => {
    if (isEditisEditableClassName) {
      const updatedData: CreateorUpdateClassroomReqDto = {
        classroomName: className,
        capacity: Number(capacity),
        forGrade: classroomDetails!.forGrade,
      };
      setLoading(true);
      try {
        const res = await classroom_update(classroomId, updatedData);
        // setClassName(className);
        toast.success(res.message || "success!");
      } catch (err: any) {
        setClassName(classroomDetails?.classroomName || "");
        toast.error(err.message || "failed");
      } finally {
        setLoading(false);
      }
    }
    setIsEditableClassName((prev) => !prev);
  };

  // delete classroom
  const navigate = useNavigate();

  const handleDeleteClassroom = async () => {
    setLoading(true);
    try {
      await classroom_delete({ id: classroomId });
      toast.success("Classroom deleted!", {
        onClose: () => {
          navigate("/admin-class-management");
        },
        autoClose: 300,
      });
    } catch (err: any) {
      toast.error(err.message || "Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  //chooseday dropdown
  const dayMapping: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
  };

  const [selectedDayNumber, setSelectedDayNumber] = useState<number | null>(1);

  function handleDayChange(selectedDay: string) {
    const dayNumber = dayMapping[selectedDay];
    setSelectedDayNumber(dayNumber);
  }

  return (
    <>
      <div className="w-[95%] overflow-x-auto pb-5">
        <div className="p-6 border-3 border-[#1952a6] rounded-[30px] min-w-[1000px]">
          <div className="mt-5 w-full flex">
            <div className="ml-auto flex">
              <ButtonWithText onClick={handleDeleteClassroom}></ButtonWithText>
              <Link to="/admin-class-management">
                <Button value="Back" variant="square-blue"></Button>
              </Link>
            </div>
          </div>

          <div className={`flex flex-col mb-7`}>
            <label className="m-4 text-[#1952a6] text-2xl font-bold">
              Class Name
            </label>
            <div className="relative w-[40%]">
              <input
                type="text"
                className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-full ${
                  !isEditisEditableClassName
                    ? "border-none"
                    : "border border-[#1952a6]"
                }`}
                value={className}
                disabled={!isEditisEditableClassName}
                onChange={(e) => setClassName(e.target.value)}
              />
              <Icon
                icon={isEditisEditableClassName ? "mdi:check" : "mdi:pencil"}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-[20px]"
                onClick={handleEditClickClassName}
              />
            </div>
          </div>
          <div className={`flex flex-col mb-7`}>
            <label className="m-4 text-[#1952a6] text-2xl font-bold">
              Class Capacity
            </label>
            <div className="relative w-[20%]">
              <input
                type="number"
                className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-full ${
                  !isEditisEditableCapacity
                    ? "border-none"
                    : "border border-[#1952a6]"
                }`}
                value={capacity}
                disabled={!isEditisEditableCapacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
              <Icon
                icon={isEditisEditableCapacity ? "mdi:check" : "mdi:pencil"}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-[20px]"
                onClick={handleEditClickCapacity}
              />
            </div>
          </div>
          <SquareDropdown
            label="Class Schedule"
            options={Object.keys(dayMapping)}
            onChange={handleDayChange}
          ></SquareDropdown>
          <AdminChooseTable
            setParentLoading={setLoading}
            currentDay={selectedDayNumber!}
            classroomId={classroomId}
            forGrade={classroomDetails!.forGrade}
            capacity={classroomDetails!.capacity}
          ></AdminChooseTable>
        </div>
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
