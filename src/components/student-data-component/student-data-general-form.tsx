import InputField from "@/components/form-component/input-field";
import DropdownField from "@/components/form-component/dropdown-field";
import TextAreaField from "@/components/form-component/textarea-field";
import Button from "../other-component/button";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import { StudentDetails } from "@/other/IStudentDetails";
import {
  editGeneralParamDto,
  userStudentData_editStudentGeneral,
  userStudentData_getStudentDetails,
} from "@/services/userStudentDataAPI";

export default function StudentDataGeneralForm() {
  const [loading2, setloading2] = useState(true);
  const loginInfo = localStorage.getItem("loginInfo");
  const nisn = loginInfo ? JSON.parse(loginInfo).nisn : null;

  const [studentDetails, setStudentDetails] = useState<StudentDetails>();

  async function fetchStudentDetails() {
    try {
      const data = await userStudentData_getStudentDetails(nisn!);
      setStudentDetails(data);

      const currentLocalStorage = JSON.parse(
        localStorage.getItem("loginInfo") || "{}"
      );
      const updatedLocalStorage = {
        ...currentLocalStorage,
        fullname: data.fullname,
      };
      localStorage.setItem("loginInfo", JSON.stringify(updatedLocalStorage));
    } catch (error: any) {
      toast.error(error.message || "Error");
    } finally {
      setloading2(false);
    }
  }

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const [isEdit2, setIsedit2] = useState(false);
  const methods = useForm({
    defaultValues: {
      nisn: "",
      grade: 0,
      gender: 0,

      fullname: "",
      dateofBirth: "",
      phoneNumber: "",
      religion: 0,
      address: "",
      parentsName: "",
      parentsPhoneNumber: "",
    },
  });

  useEffect(() => {
    if (studentDetails) {
      methods.reset({
        nisn: studentDetails.nisn,
        grade: studentDetails.grade,
        gender: studentDetails.gender,

        fullname: studentDetails.fullname,
        dateofBirth: studentDetails.dateofBirth.split("T")[0],
        phoneNumber: studentDetails.phoneNumber,
        religion: studentDetails.religion,
        address: studentDetails.address,
        parentsName: studentDetails.parentsName,
        parentsPhoneNumber: studentDetails.parentsPhoneNumber,
      });
    }
  }, [studentDetails]);

  const onSubmit = async (data: editGeneralParamDto) => {
    setloading2(true);

    const realSubmitData = {
      fullname: data.fullname,
      dateofBirth: data.dateofBirth,
      phoneNumber: data.phoneNumber,
      religion: Number(data.religion),
      address: data.address,
      parentsName: data.parentsName,
      parentsPhoneNumber: data.parentsPhoneNumber,
    };

    try {
      const res = await userStudentData_editStudentGeneral(
        realSubmitData,
        nisn
      );
      fetchStudentDetails();
      setIsedit2(false);
      toast.success(res.message || "Successful!");
    } catch (err: any) {
      methods.reset({
        nisn: studentDetails!.nisn,
        grade: studentDetails!.grade,
        gender: studentDetails!.gender,

        fullname: studentDetails!.fullname,
        dateofBirth: studentDetails!.dateofBirth,
        phoneNumber: studentDetails!.phoneNumber,
        religion: studentDetails!.religion,
        address: studentDetails!.address,
        parentsName: studentDetails!.parentsName,
        parentsPhoneNumber: studentDetails!.parentsPhoneNumber,
      });
      setIsedit2(false);
      toast.error(err.message || "failed");
    } finally {
      setloading2(false);
    }
  };

  const genderOptions = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];

  const religionOptions = [
    { label: "Islam", value: 1 },
    { label: "Kristen", value: 2 },
    { label: "Katolik", value: 3 },
    { label: "Buddha", value: 4 },
    { label: "Hindu", value: 5 },
    { label: "Konghucu", value: 6 },
  ];

  const gradeOptions = [
    { label: "10", value: 1 },
    { label: "11", value: 2 },
    { label: "12", value: 3 },
    { label: "Graduate", value: 4 },
  ];

  return (
    <>
      <div className="mt-20 w-[90%] ">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex md:flex-row flex-col-reverse"
          >
            <div className="flex-4">
              <InputField
                name="nisn"
                disabled={true}
                label="NISN"
                inputType="text"
                size="large"
              ></InputField>
              <InputField
                name="fullname"
                disabled={!isEdit2}
                label="Full Name"
                inputType="text"
                size="large"
              ></InputField>

              <div className="flex mb-7 sm:flex-row flex-col sm:gap-0 gap-5">
                <InputField
                  name="dateofBirth"
                  disabled={!isEdit2}
                  label="Date of Birth"
                  inputType="date"
                  size="small"
                ></InputField>
                <InputField
                  name="phoneNumber"
                  disabled={!isEdit2}
                  label="Phone Number"
                  inputType="text"
                  size="small"
                ></InputField>
              </div>

              <div className="flex mb-7 sm:flex-row flex-col sm:gap-0 gap-5">
                <DropdownField
                  name="grade"
                  disabled={true}
                  label="Grade"
                  options2={gradeOptions}
                ></DropdownField>
                <DropdownField
                  name="gender"
                  disabled={true}
                  label="Gender"
                  options2={genderOptions}
                ></DropdownField>
                <DropdownField
                  name="religion"
                  disabled={!isEdit2}
                  label="Religion"
                  options2={religionOptions}
                ></DropdownField>
              </div>

              <TextAreaField
                name="address"
                disabled={!isEdit2}
                label="Address"
              ></TextAreaField>
              <InputField
                name="parentsName"
                disabled={!isEdit2}
                label="Parent's Name"
                inputType="text"
                size="large"
              ></InputField>
              <InputField
                name="parentsPhoneNumber"
                disabled={!isEdit2}
                label="Parent's Phone Number"
                inputType="text"
                size="large"
              ></InputField>
            </div>
            <div className="flex-1 flex flex-col items-end">
              <div className="md:block flex gap-5">
                <p className="text-[#1952a6] font-bold md:text-[1.4rem] text-[1.2rem] mb-3 md:block inline-block">
                  General Information
                </p>
                {isEdit2 ? (
                  <Button
                    type="submit"
                    variant="square-blue"
                    value="Submit"
                    disabled={loading2}
                  />
                ) : (
                  <button
                    className={`cursor-pointer bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70`}
                    onClick={() => setIsedit2(true)}
                    type="button"
                    disabled={loading2}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>

      {loading2 && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
