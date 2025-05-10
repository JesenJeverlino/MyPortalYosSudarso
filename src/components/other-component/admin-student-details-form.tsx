import InputField from "@/components/form-component/input-field";
import DropdownField from "@/components/form-component/dropdown-field";
import TextAreaField from "@/components/form-component/textarea-field";

export default function AdminStudentDetailsForm() {
  return (
    <>
      <div className="mt-10 flex">
        <div className="flex-4">
          <form action="">
            <InputField value="NISN" inputType="text" size="large"></InputField>
            <InputField value="Full Name" inputType="text" size="large"></InputField>

            <div className="flex mb-7">
            <InputField value="Date of Birth" inputType="date" size="small"></InputField>
            <InputField value="Phone Number" inputType="text" size="small"></InputField>
            </div>

            <div className="flex mb-7">
            <DropdownField label="Grade" options={["10", "11", "12"]}></DropdownField>
            <DropdownField label="Gender" options={["Male", "Female"]}></DropdownField>
            <DropdownField label="Religion" options={["Islam","Kristen","Katolik","Hindu","Buddha","Konghucu"]}></DropdownField>
            </div>

            <TextAreaField label="Address"></TextAreaField>
            <InputField value="Parent's Name" inputType="text" size="large"></InputField>
            <InputField value="Parent's Phone Number" inputType="text" size="large"></InputField>
            <InputField value="Email" inputType="email" size="large"></InputField>
            <InputField value="Password" inputType="password" size="large"></InputField>
          </form>
        </div>
        <div className="flex-1 flex flex-col text-center">
          <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
            Profile Picture
          </h1>
          <label htmlFor="profile-picture">
            <img
              src="pp-draft.jpg"
              className="xl:w-[50%] w-[75%] h-auto rounded-full mb-3 mx-auto"
            />
          </label>
          <input type="file" id="profile-picture" className="hidden" />
        </div>
      </div>
    </>
  );
}
