import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function LoginCardLeft() {
  return (
    <>
      <div className="flex-1 bg-[#1952a6]/80 text-white flex flex-col md:p-0 p-2">
        <div className="flex md:m-[10px]">
          <img
            src="logo-yos-sudarso.jpeg"
            className="rounded-[10px] mr-[10px] lg:h-auto md:w-[20%] md:h-[50px] w-[50px] h-auto"
          />
          <p className="font-semibold 2xl:text-[1.4rem] xl:text-[1.1rem] lg:text-[1.0rem] md:text-[0.9em] text-[1.0em]">SMAK YOS SUDARSO BATAM</p>
        </div>
        <div className="h-[70%] flex flex-col justify-around text-center md:gap-0 gap-2">
          <p className="font-bold 2xl:text-5xl xl:text-4xl md:text-3xl md:block hidden">Hello, Friend!</p>
          <p className="font-extralight ml-10 mr-10 2xl:text-[1.3rem] xl:text-[1.2rem] lg:text-[1.0rem] md:text-[0.9rem] md:ml-1 md:mr-1">
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
