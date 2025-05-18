import AdminHeader from "@/components/admin-header";
import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import Button from "@/components/other-component/button";
import { useState, useEffect } from "react";
import { AdminEditReqDto, admin_edit } from "@/services/admin";
import { useForm, FormProvider } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export default function AdminAccountSettings() {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const methods = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const [previousData, setPreviousData] = useState<AdminEditReqDto>();

  useEffect(() => {
    const stored = localStorage.getItem("loginInfo");
    if (stored) {
      const loginInfo = JSON.parse(stored);
      const newAdminData = {
        fullname: loginInfo.fullname || "",
        email: loginInfo.email || "",
        password: loginInfo.password || "",
      };
      setPreviousData(newAdminData);
      methods.reset(newAdminData);
    }
  }, []);

  const onSubmit = async (data: AdminEditReqDto) => {
    setLoading(true);

    try {
      const res = await admin_edit(data);
      toast.success(res.message || "Register successful!");
      localStorage.setItem("loginInfo", JSON.stringify(data));
      methods.reset(data);
      setPreviousData(data);
      setIsEdit(false);
    } catch (err: any) {
      setIsEdit(false);
      methods.reset(previousData)
      toast.error(err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader value="Account Settings"></AdminHeader>
      <div className="mt-20 w-[90%]">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex md:flex-row flex-col-reverse md:gap-0 gap-5"
          >
            <div className="flex-4">
              <InputField
                name="fullname"
                disabled={!isEdit}
                label="Full Name"
                inputType="text"
                size="large"
              ></InputField>
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
              {/* <AttachImgField></AttachImgField> */}
            </div>
            <div className="flex-1 flex flex-col items-end">
              {isEdit ? (
                <Button
                  type="submit"
                  variant="square-blue"
                  value="Submit"
                  disabled={loading}
                />
              ) : (
                //sama aja ama square yellow
                <button
                  className={`cursor-pointer bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70`}
                  onClick={() => setIsEdit(true)}
                  type="button"
                  disabled={loading}
                >
                  Edit
                </button>
                //ntah knp bug type nya ga kebaca "button" jadi pas klik ini malah jalan api nya
                // <Button
                //   type="button"
                //   variant="square-yellow"
                //   value="Edit"
                //   onClick={() => setIsEdit(true)}
                // />
              )}
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
