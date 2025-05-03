import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import StudentDataEditSection from "@/components/student-data-component/student-data-form-component/student-data-edit-section";

export default function StudentDataAuthForm() {
  return (
    <>
      <div className="mt-20 w-[90%] flex">
        <div className="flex-4">
          <form action="">
            <InputField value="Email" inputType="email" size="large"></InputField>
            <InputField value="Password" inputType="password" size="large"></InputField>
            <AttachImgField></AttachImgField>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <StudentDataEditSection value="Login Information"></StudentDataEditSection>
        </div>
      </div>
    </>
  );
}