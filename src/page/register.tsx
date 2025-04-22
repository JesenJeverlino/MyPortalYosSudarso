import { Link } from "react-router-dom"
import Button from "@/components/button"
import RegistermForm from '@/components/register-form'

export default function Register() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[url('/morphism-background-image.jpg')] bg-cover">
        <div className="w-[80%] h-[90%] bg-[#1952a6] rounded-[20px] flex flex-col">
          <div className="flex justify-between m-6 flex-1">
            <img
              src="logo-yos-sudarso.jpeg"
              className="w-[70px] h-auto rounded-[10px]"
            />
            <h1 className="text-white text-4xl mt-5">REGISTER FORM</h1>
            <Link to="/"  className="mb-auto">
              <Button value="Back" variant="square-blue"></Button>
            </Link>
          </div>
          <div className="w-[95%] flex-6 mb-5 overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#c9c9c9] [&::-webkit-scrollbar-thumb]:bg-[#5398ff] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
            <RegistermForm></RegistermForm>
          </div>
          </div>
        </div>
    </>
  );
}
