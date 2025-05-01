import StudentDataInputField from "@/components/student-data-component/student-data-form-component/student-data-input-field";
import StudentDataAttachImgField from "@/components/student-data-component/student-data-form-component/student-data-attach-img-field";
import Button from "@/components/other-component/button";

export default function AdminAccountSettings() {
  return (
    <>
      <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">
        Student Data
      </h1>
      <div className="mt-20 w-[90%] flex">
        <div className="flex-4">
          <form action="">
            <StudentDataInputField value="Full Name" inputType="text" size="large"></StudentDataInputField>
            <StudentDataInputField value="Email" inputType="email" size="large"></StudentDataInputField>
            <StudentDataInputField value="Password" inputType="password" size="large"></StudentDataInputField>
            <StudentDataAttachImgField></StudentDataAttachImgField>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <Button value="Edit" variant="square-yellow"></Button>
        </div>
      </div>
    </>
  );
}
