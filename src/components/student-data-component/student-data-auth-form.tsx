import StudentDataInputField from "@/components/student-data-component/student-data-form-component/student-data-input-field";
import StudentDataAttachImgField from "@/components/student-data-component/student-data-form-component/student-data-attach-img-field";
import StudentDataEditSection from "@/components/student-data-component/student-data-form-component/student-data-edit-section";

export default function StudentDataAuthForm() {
  return (
    <>
      <div className="mt-20 w-[90%] flex">
        <div className="flex-4">
          <form action="">
            <StudentDataInputField value="Email" inputType="email" size="large"></StudentDataInputField>
            <StudentDataInputField value="Password" inputType="password" size="large"></StudentDataInputField>
            <StudentDataAttachImgField></StudentDataAttachImgField>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <StudentDataEditSection value="Login Information"></StudentDataEditSection>
        </div>
      </div>
    </>
  );
}