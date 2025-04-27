import RegisterHeader from "@/components/register-component/register-header";
import RegistermForm from "@/components/register-component/register-form";

export default function Register() {
  return (
    <>
      <div className="w-[80%] h-[90%] bg-[#1952a6] rounded-[20px] flex flex-col">
        <RegisterHeader></RegisterHeader>
        <RegistermForm></RegistermForm>
      </div>
    </>
  );
}
