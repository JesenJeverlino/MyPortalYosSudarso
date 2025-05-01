import StudentDataInputField from "@/components/student-data-component/student-data-form-component/student-data-input-field";
import StudentDataDropdownField from "@/components/student-data-component/student-data-form-component/student-data-dropdown-field";
import StudentTextAreaField from "@/components/student-data-component/student-data-form-component/student-data-textarea-field";

export default function AdminDashboardStudentData() {
  return (
    <>
      <div className="mt-10 flex">
        <div className="flex-4">
          <form action="">
            <StudentDataInputField value="NISN" inputType="text" size="large"></StudentDataInputField>
            <StudentDataInputField value="Full Name" inputType="text" size="large"></StudentDataInputField>

            <div className="flex mb-7">
            <StudentDataInputField value="Date of Birth" inputType="date" size="small"></StudentDataInputField>
            <StudentDataInputField value="Phone Number" inputType="text" size="small"></StudentDataInputField>
            </div>

            <div className="flex mb-7">
            <StudentDataDropdownField label="Grade" options={["10", "11", "12"]}></StudentDataDropdownField>
            <StudentDataDropdownField label="Gender" options={["Male", "Female"]}></StudentDataDropdownField>
            <StudentDataDropdownField label="Religion" options={["Islam","Kristen","Katolik","Hindu","Buddha","Konghucu"]}></StudentDataDropdownField>
            </div>

            <StudentTextAreaField label="Address"></StudentTextAreaField>
            <StudentDataInputField value="Parent's Name" inputType="text" size="large"></StudentDataInputField>
            <StudentDataInputField value="Parent's Phone Number" inputType="text" size="large"></StudentDataInputField>
            <StudentDataInputField value="Email" inputType="email" size="large"></StudentDataInputField>
            <StudentDataInputField value="Password" inputType="password" size="large"></StudentDataInputField>
          </form>
        </div>
        <div className="flex-1 flex flex-col text-center">
          <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
            Profile Picture
          </h1>
          <label htmlFor="profile-picture">
            <img
              src="pp-draft.jpg"
              className="w-[50%] h-auto rounded-full mb-3 mx-auto"
            />
          </label>
          <input type="file" id="profile-picture" className="hidden" />
        </div>
      </div>
    </>
  );
}
