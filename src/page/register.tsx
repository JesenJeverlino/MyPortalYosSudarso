import { Link } from "react-router-dom";
import Button from "@/components/button";

export default function Register() {
  return (
    <>
      <div className="w-full h-screen flex justify-center bg-[url('/morphism-background-image.jpg')] bg-cover">
        <div className="w-[80%] h-[80%] bg-[#1952a6] rounded-[20px] mt-[50px]">
          <div className="flex justify-between m-6">
            <img
              src="logo-yos-sudarso.jpeg"
              className="w-[70px] h-auto rounded-[10px]"
            />
            <h1 className="text-white text-4xl mt-5">REGISTER FORM</h1>
            <Link to="/"  className="mb-auto">
              <Button value="Back" variant="square-blue"></Button>
            </Link>
          </div>
          <h1 className="text-red-400">
            ini register form, besok lanjut!, btw buttonnya agak aneh areanya,
            sepertinya link punya daerah klik tersendiri
          </h1>
        </div>
      </div>
    </>
  );
}
