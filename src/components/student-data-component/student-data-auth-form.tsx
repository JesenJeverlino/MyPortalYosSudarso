import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import { StudentDetails } from "@/other/IStudentDetails";
import { useState, useEffect } from "react";
import Button from "../other-component/button";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm, FormProvider } from "react-hook-form";
import {
  userStudentData_editStudentLogin,
  editLoginParamDto,
  userStudentData_getStudentDetails,
} from "@/services/userStudentDataAPI";

export default function StudentDataAuthForm() {
  const [loading, setLoading] = useState(true);
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
      console.log(currentLocalStorage); //jan lupa hapus
      const updatedLocalStorage = {
        ...currentLocalStorage,
        password: data.password,
        imagePath: data.imagePath,
      };
      localStorage.setItem("loginInfo", JSON.stringify(updatedLocalStorage));
      console.log(localStorage.getItem("loginInfo")); //jan lupa hapus
    } catch (error: any) {
      toast.error(error.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const [isEdit, setIsEdit] = useState(false);
  const methods = useForm<editLoginParamDto>({
    defaultValues: {
      email: "",
      password: "",
      profilePicture: null,
    },
  });

  useEffect(() => {
    if (studentDetails) {
      methods.reset({
        email: studentDetails.email,
        password: studentDetails.password,
      });
    }
  }, [studentDetails]);

  const onSubmit = async (data: editLoginParamDto) => {
    //gw udh test, kalau ga upload maka undefined..maka upload keluarnya file list
    console.log(data.profilePicture);
    setIsEdit(false);
    // setLoading(true);

    // try {
    //   const res = await userStudentData_editStudentLogin(data, nisn);
    //   fetchStudentDetails();
    //   setIsEdit(false);
    //   toast.success(res.message || "Successful!");
    // } catch (err: any) {
    //   methods.reset({
    //     email: studentDetails!.email,
    //     password: studentDetails!.password,
    //   });
    //   setIsEdit(false);
    //   toast.error(err.message || "failed");
    // } finally {
    //   setLoading(false);
    // }
  };

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  //lanjut preview image dulu, habis itu baru cari tau cara biar ifilelist bisa ke send ke be

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
                name="email"
                disabled={true}
                label="Email"
                inputType="email"
                size="large"
              ></InputField>
              <InputField
                name="password"
                disabled={!isEdit}
                label="Password"
                inputType="password"
                size="large"
              ></InputField>
              <AttachImgField
                name="profilePicture"
                disabled={!isEdit}
                onChange={handleImageChange}
                src={
                  studentDetails
                    ? `https://localhost:44364/${studentDetails.imagePath}`
                    : "/default.jpg"
                }
              ></AttachImgField>
            </div>
            <div className="flex-1 flex flex-col items-end">
              <div className="md:block flex gap-5">
                <p className="text-[#1952a6] font-bold md:text-[1.4rem] text-[1.2rem] mb-3 md:block inline-block">
                  Login Information
                </p>
                {isEdit ? (
                  <Button
                    type="submit"
                    variant="square-blue"
                    value="Submit"
                    disabled={loading}
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
            </div>
          </form>
        </FormProvider>
      </div>

      {imagePreview && <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover" />}

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
