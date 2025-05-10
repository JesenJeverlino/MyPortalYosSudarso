import AdminHeader from "@/components/admin-header";
import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import Button from "@/components/other-component/button";

export default function AdminAccountSettings() {
  return (
    <>
      <AdminHeader value="Account Settings"></AdminHeader>
      <div className="mt-20 w-[90%] flex md:flex-row flex-col-reverse md:gap-0 gap-5">
        <div className="flex-4">
          <form action="">
            <InputField value="Full Name" inputType="text" size="large"></InputField>
            <InputField value="Email" inputType="email" size="large"></InputField>
            <InputField value="Password" inputType="password" size="large"></InputField>
            <AttachImgField></AttachImgField>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <Button value="Edit" variant="square-yellow"></Button>
        </div>
      </div>
    </>
  );
}
