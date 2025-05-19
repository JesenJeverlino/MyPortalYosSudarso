import InputField from "@/components/form-component/input-field";
import DropdownField from "@/components/form-component/dropdown-field";
import TextAreaField from "@/components/form-component/textarea-field";
import { useEffect, useState } from "react";
import { userStudentData_getStudentDetails } from "@/services/userStudentDataAPI";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StudentDetails, StudentDataReligion, StudentDataGender } from "@/other/IStudentDetails";

export default function AdminStudentDetailsForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nisn = queryParams.get("nisn");

  const [studentDetails, setStudentDetails] = useState<StudentDetails>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPendingStudents() {
      try {
        const data = await userStudentData_getStudentDetails(nisn!);
        setStudentDetails(data);
      } catch (error: any) {
        toast.error(error.message || "No Students", {
          onClose: () => {
            navigate("/admin-dashboard");
          },
          autoClose: 500,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchPendingStudents();
  }, []);

  const gradeMap: Record<number, string> = {
  1: "10",
  2: "11",
  3: "12",
  4: "graduate",
};

  return (
    <>
      {!loading && (
        <div className="mt-10 flex">
          <div className="flex-4">
            <form action="">
              <InputField
                value={studentDetails!.nisn}
                label="NISN"
                inputType="text"
                size="large"
              ></InputField>
              <InputField
                value={studentDetails!.fullname}
                label="Full Name"
                inputType="text"
                size="large"
              ></InputField>

              <div className="flex mb-7">
                <InputField
                  value={studentDetails!.dateofBirth.slice(0, 10)}
                  label="Date of Birth"
                  inputType="date"
                  size="small"
                ></InputField>
                <InputField
                  value={studentDetails!.phoneNumber}
                  label="Phone Number"
                  inputType="text"
                  size="small"
                ></InputField>
              </div>

              <div className="flex mb-7">
                <DropdownField
                  value={gradeMap[studentDetails!.grade]}
                  label="Grade"
                  options={["10", "11", "12", "Graduate"]}
                  disabled={true}
                ></DropdownField>
                <DropdownField
                  value={StudentDataGender[studentDetails!.gender]}
                  label="Gender"
                  options={["Male", "Female"]}
                  disabled={true}
                ></DropdownField>
                <DropdownField
                  value={StudentDataReligion[studentDetails!.religion]}
                  label="Religion"
                  options={[
                    "Islam",
                    "Kristen",
                    "Katolik",
                    "Hindu",
                    "Buddha",
                    "Konghucu",
                  ]}
                  disabled={true}
                ></DropdownField>
              </div>

              <TextAreaField
                value={studentDetails!.address}
                label="Address"
                disabled={true}
              ></TextAreaField>
              <InputField
                value={studentDetails!.parentsName}
                label="Parent's Name"
                inputType="text"
                size="large"
              ></InputField>
              <InputField
                value={studentDetails!.parentsPhoneNumber}
                label="Parent's Phone Number"
                inputType="text"
                size="large"
              ></InputField>
              <InputField
                value={studentDetails!.email}
                label="Email"
                inputType="email"
                size="large"
              ></InputField>
              <InputField
                value={studentDetails!.password}
                label="Password"
                inputType="password"
                size="large"
              ></InputField>
            </form>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
              Profile Picture
            </h1>
            <label htmlFor="profile-picture">
              <img
          src={
            studentDetails?.imagePath ? `https://localhost:44364/${studentDetails?.imagePath}` : "/default.jpg"
          }
                className="xl:w-[50%] w-[75%] h-auto rounded-full mb-3 mx-auto"
              />
            </label>
            <input type="file" id="profile-picture" className="hidden" />
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
