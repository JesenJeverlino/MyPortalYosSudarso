import { Link } from "react-router-dom";
import RegisterInputField from "@/components/register-component/register-form-component/register-input-field";
import RegisterDropdownField from '@/components/register-component/register-form-component/register-dropdown-field'
import RegisterTextareaField from "@/components/register-component/register-form-component/register-textarea-field";
import Button from "@/components/button";

export default function RegisterForm() {
  return (
    <>
      <div className="w-[95%] flex-6 mb-5 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#c9c9c9] [&::-webkit-scrollbar-thumb]:bg-[#5398ff] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
        <form className="mx-auto max-w-[80%]">
          <RegisterInputField label="NISN" inputType="text" size="large"></RegisterInputField>
          <RegisterInputField label="Full Name" inputType="text" size="large"></RegisterInputField>

          <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col w-[29%]">
              <RegisterInputField label="Date of Birth" inputType="date" size="small"></RegisterInputField>
            </div>
            <div className="flex flex-col w-[29%]">
              <RegisterInputField label="Phone Number" inputType="text" size="small"></RegisterInputField>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col w-[18%]">
              <RegisterDropdownField label="ClassRoom" options={["10-A", "10-B", "10-C"]}></RegisterDropdownField>
            </div>
            <div className="flex flex-col w-[18%]">
              <RegisterDropdownField label="Gender" options={["Male", "Female"]}></RegisterDropdownField>
            </div>
            <div className="flex flex-col w-[18%]">
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