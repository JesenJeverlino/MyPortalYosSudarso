import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function LoginCardLeft() {
  return (
    <>
      <div className="flex-1 bg-[#1952a6]/80 text-white flex flex-col">
        <div className="flex m-[10px]">
          <img
            src="logo-yos-sudarso.jpeg"
            className="w-[20%] h-auto rounded-[10px] mr-[10px]"
          />
          <p className="text-[1.1rem] font-semibold 2xl:text-[1.4rem]">SMAK YOS SUDARSO BATAM</p>
        </div>
        <div className="h-[70%] flex flex-col justify-around text-center">
          <p className="text-4xl font-bold 2xl:text-5xl">Hello, Friend!</p>
          <p className="font-extralight ml-10 mr-10 2xl:text-[1.3rem]">
            Enter your personal details and start journey with us
          </p>
          <Link to="/register" className="ml-auto mr-auto">
            <Button value="REGISTER" variant="round-blue-transparent" />
          </Link>
        </div>
      </div>
    </>
  );
}
