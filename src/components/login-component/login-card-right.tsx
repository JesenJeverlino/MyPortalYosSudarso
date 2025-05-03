import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function LoginCardRight() {
  return (
    <>
      <div className="flex-2 flex flex-col bg-white/80">
        <p className="text-4xl font-bold text-[#1952a6] mt-10 mb-6 text-center 2xl:text-5xl">
          Welcome to MyPortal
        </p>
        <form className="flex flex-col items-center justify-around flex-1">
          <input
            type="email"
            placeholder="Email"
            className="px-5 w-[70%] h-[70px] mb-[10px] mx-[10px] 
            rounded-[5px] border-2 border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[90px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 w-[70%] h-[70px] mb-[10px] mx-[10px] 
            rounded-[5px] border-2 border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[90px]"
          />
          <Link to="/admin-dashboard" className="mb-[40px]">
            <Button value="LOGIN" variant="round-blue" />
          </Link>
        </form>
      </div>
    </>
  );
}
