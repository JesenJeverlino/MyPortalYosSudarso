import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type propsType = {
  value: string;
  inputType: string;
  size: "large" | "small";
};

export default function InputField({ value, inputType, size }:propsType) {

  const [showPassword, setShowPassword] = useState(false);

    const sizeClass = {
        large: "mb-7",
        small: "flex-1"
    }

    const currentSize = sizeClass[size];

  return (
    <>
      <div className={`flex flex-col ${currentSize}`}>
        <label className="m-4 text-[#1952a6] text-2xl font-bold">{value}</label>
        {inputType === "password" ? (
        <div className="relative h-[55px] w-[80%]">
          <input type={showPassword ? "text" : "password"} className={`bg-[#D0E1FA] h-full w-full pl-5 pr-5 rounded-[30px] w-[80%]`}/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a6a6a6] hover:text-[#1952a6]">
            {showPassword ? <EyeOff size={20} className="text-black" /> : <Eye size={20} className="text-black"/>}
          </button>
        </div>
      ) : (  
        <input type={inputType} className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-[80%]`}/>
      )}

      </div>
    </>
  );
}