import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import { StudentDetails } from "@/other/IStudentDetails";
import { useState, useEffect } from "react";
import Button from "../other-component/button";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import {
  userStudentData_editStudentLogin,
  editLoginParamDto,
  userStudentData_getStudentDetails,
} from "@/services/userStudentDataAPI";
import { useAuth } from "@/other/authContext";

interface FormProps {
  setLoading: (loading: boolean) => void;
  isLoading: boolean;
}

export default function StudentDataAuthForm({
  setLoading,
  isLoading,
}: FormProps) {

  const { loginInfo, login } = useAuth();
  const nisn = loginInfo?.nisn;
  const [previewImg, setPreviewImg] = useState("/default.jpg");
  const [studentDetails, setStudentDetails] = useState<StudentDetails>();

  async function fetchStudentDetails() {
    setLoading(true);
    try {
      const data = await userStudentData_getStudentDetails(nisn!);
      setStudentDetails(data);

      login({
        ...loginInfo!,
        password: data.password,
        imagePath: data.imagePath,
      });
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
        profilePicture: null,
      });
    }
  }, [studentDetails]);

  const onSubmit = async (data: editLoginParamDto) => {
    setIsEdit(false);
    setLoading(true);

    try {
      const res = await userStudentData_editStudentLogin(data, nisn!);
      fetchStudentDetails();
      toast.success(res.message || "Successful!");
    } catch (err: any) {
      methods.reset({
        email: studentDetails!.email,
        password: studentDetails!.password,
      });
      if (studentDetails?.imagePath) {
        setPreviewImg(`https://localhost:44364/${studentDetails.imagePath}`);
      }
      toast.error(err.message || "failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (studentDetails?.imagePath) {
      setPreviewImg(`https://localhost:44364/${studentDetails.imagePath}`);
    }
  }, [studentDetails]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    methods.setValue("profilePicture", file ? file : null);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImg(previewUrl);
    } else {
      setPreviewImg(
        studentDetails
          ? `https://localhost:44364/${studentDetails.imagePath}`
          : "/default.jpg"
      );
    }
  }

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
                src={previewImg}
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
                    disabled={isLoading}
                  />
                ) : (
                  <button
                    className={`cursor-pointer bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70`}
                    onClick={() => setIsEdit(true)}
                    type="button"
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
