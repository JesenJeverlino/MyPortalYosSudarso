import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormContext } from "react-hook-form";

type propsType = {
  label: string;
  inputType: string;
  size: "large" | "small";
  disabled?: boolean;
  name?: string;
};

export default function InputField({ label, inputType, size, disabled, name }:propsType) {
    const { register } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

    const sizeClass = {
        large: "mb-7",
        small: "flex-1"
    }

    const currentSize = sizeClass[size];

  return (
    <>
      <div className={`flex flex-col ${currentSize}`}>
        <label className="m-4 text-[#1952a6] text-2xl font-bold">{label}</label>
        {inputType === "password" ? (
        <div className="relative h-[55px] sm:w-[80%] w-full">
          <input {...register(name)} type={showPassword ? "text" : "password"} className={`bg-[#D0E1FA] h-full w-full pl-5 pr-5 rounded-[30px] w-full ${disabled ? "border-none": "border border-[#1952a6]"}`} disabled={disabled}/>
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a6a6a6] hover:text-[#1952a6]">
            {showPassword ? <EyeOff size={20} className="text-black" /> : <Eye size={20} className="text-black"/>}
          </button>
        </div>
      ) : (  
        <input {...register(name)} type={inputType} className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] sm:w-[80%] w-full ${disabled ? "border-none": "border border-[#1952a6]"}`} disabled={disabled}/>
      )}

      </div>
    </>
  );
}