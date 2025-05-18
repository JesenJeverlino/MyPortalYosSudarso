import RegisterInputField from "@/components/register-component/register-sub-component/register-input-field";
import RegisterDropdownField from "@/components/register-component/register-sub-component/register-dropdown-field";
import RegisterTextareaField from "@/components/register-component/register-sub-component/register-textarea-field";
import Button from "@/components/other-component/button";
import { auth_register, RegisterReqDto } from "@/services/auth";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export default function RegisterForm() {
  const methods = useForm<RegisterReqDto>();
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterReqDto) => {
    setLoading(true);
    try {
      if (data.dateOfBirth == "") {
        toast.error("Date of Birth is required");
        return;
      }
      data.grade = Number(data.grade);
      data.gender = Number(data.gender);
      data.religion = Number(data.religion);
      const res = await auth_register(data);
      toast.success(res.message || "Register successful!", {
        onClose: () => {
          navigate("/");
        },
        autoClose: 1000,
      });
    } catch (err: any) {
      toast.error(err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[95%] flex-6 mb-5 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#c9c9c9] [&::-webkit-scrollbar-thumb]:bg-[#5398ff] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[80%]"
          >
            <RegisterInputField
              name="nisn"
              label="NISN"
              inputType="text"
              size="large"
            ></RegisterInputField>
            <RegisterInputField
              name="fullName"
              label="Full Name"
              inputType="text"
              size="large"
            ></RegisterInputField>

            <div className="flex flex-wrap gap-6 mb-7">
              <div className="flex flex-col xl:w-[29%] lg:w-[35%] md:w-[45%] w-full">
                <RegisterInputField
                  name="dateOfBirth"
                  label="Date of Birth"
                  inputType="date"
                  size="small"
                ></RegisterInputField>
              </div>
              <div className="flex flex-col xl:w-[29%] lg:w-[35%] md:w-[45%] w-full">
                <RegisterInputField
                  name="phoneNumber"
                  label="Phone Number"
                  inputType="text"
                  size="small"
                ></RegisterInputField>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-7">
              <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
                <RegisterDropdownField
                  name="grade"
                  label="Grade"
                  options={["10", "11", "12"]}
                ></RegisterDropdownField>
              </div>
              <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
                <RegisterDropdownField
                  name="gender"
                  label="Gender"
                  options={["Male", "Female"]}
                ></RegisterDropdownField>
              </div>
              <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
                <RegisterDropdownField
                  name="religion"
                  label="Religion"
                  options={[
                    "Islam",
                    "Kristen",
                    "Katolik",
                    "Buddha",
                    "Hindu",
                    "Konghucu",
                  ]}
                ></RegisterDropdownField>
              </div>
            </div>

            <RegisterTextareaField
              name="address"
              label="Address"
            ></RegisterTextareaField>
            <RegisterInputField
              name="parentsName"
              label="Parent's Name"
              inputType="text"
              size="large"
            ></RegisterInputField>
            <RegisterInputField
              name="parentsPhoneNumber"
              label="Parent's Phone Number"
              inputType="text"
              size="large"
            ></RegisterInputField>
            <RegisterInputField
              name="email"
              label="Email"
              inputType="email"
              size="large"
            ></RegisterInputField>
            <RegisterInputField
              name="password"
              label="Password"
              inputType="password"
              size="large"
            ></RegisterInputField>

            <div className="block flex flex-row-reverse mb-10">
              <Button
                value="OK"
                variant="square-blue"
                disabled={loading}
                type="submit"
              ></Button>
            </div>
          </form>
        </FormProvider>
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
