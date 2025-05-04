import { Link } from "react-router-dom";
import RegisterInputField from "@/components/register-component/register-sub-component/register-input-field";
import RegisterDropdownField from '@/components/register-component/register-sub-component/register-dropdown-field'
import RegisterTextareaField from "@/components/register-component/register-sub-component/register-textarea-field";
import Button from "@/components/other-component/button";

export default function RegisterForm() {
  return (
    <>
      <div className="w-[95%] flex-6 mb-5 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#c9c9c9] [&::-webkit-scrollbar-thumb]:bg-[#5398ff] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
        <form className="mx-auto max-w-[80%]">
          <RegisterInputField label="NISN" inputType="text" size="large"></RegisterInputField>
          <RegisterInputField label="Full Name" inputType="text" size="large"></RegisterInputField>

          <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col xl:w-[29%] lg:w-[35%] md:w-[45%] w-full">
              <RegisterInputField label="Date of Birth" inputType="date" size="small"></RegisterInputField>
            </div>
            <div className="flex flex-col xl:w-[29%] lg:w-[35%] md:w-[45%] w-full">
              <RegisterInputField label="Phone Number" inputType="text" size="small"></RegisterInputField>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
              <RegisterDropdownField label="Grade" options={["10", "11", "12"]}></RegisterDropdownField>
            </div>
            <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
              <RegisterDropdownField label="Gender" options={["Male", "Female"]}></RegisterDropdownField>
            </div>
            <div className="flex flex-col xl:w-[18%] lg:w-[21%] md:w-[25%] w-full">
              <RegisterDropdownField label="Religion" options={["Islam","Kristen","Katolik","Hindu","Buddha","Konghucu"]}></RegisterDropdownField>
            </div>
          </div>

          <RegisterTextareaField label="Address"></RegisterTextareaField>
          <RegisterInputField label="Parent's Name" inputType="text" size="large"></RegisterInputField>
          <RegisterInputField label="Parent's Phone Number" inputType="text" size="large"></RegisterInputField>
          <RegisterInputField label="Email" inputType="email" size="large"></RegisterInputField>
          <RegisterInputField label="Password" inputType="password" size="large"></RegisterInputField>
          
          <div className="block flex flex-row-reverse mb-10">
            <Link to="/" className="mb-[40px]">
              <Button value="OK" variant="square-blue"></Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}