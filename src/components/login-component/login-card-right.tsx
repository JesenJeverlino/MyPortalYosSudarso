import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function LoginCardRight() {

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <div className="flex-2 flex flex-col bg-white/80">
        <p className="font-bold text-[#1952a6] mt-10 mb-6 text-center 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl">Welcome to MyPortal</p>
        <form className="flex flex-col items-center justify-around flex-1">
          <input type="email" placeholder="Email" className="px-5 w-[70%] mb-[10px] mx-[10px] rounded-[5px] border-2 
            border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[80px] lg:h-[70px] md:h-[65px] h-[50px]"/>
          <div className="relative w-[70%] mb-[10px] mx-[10px]"> 
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="px-5 w-full rounded-[5px] border-2 
            border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[80px] lg:h-[70px] md:h-[65px] h-[50px]"/>
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a6a6a6] hover:text-[#1952a6]">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Link to="/admin-dashboard" className="mb-[40px]">
            <Button value="LOGIN" variant="round-blue" />
          </Link>
        </form>
      </div>
    </>
  );
}
