import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormContext } from "react-hook-form";

type propsType = {
  label: string;
  inputType: string;
  size: "large" | "small";
  name: string;
};

export default function RegisterInputField({
  label,
  inputType,
  size,
  name,
}: propsType) {
  const { register } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const sizeClass = {
    large: {
      label: "block",
      input: "xl:w-[55%] lg:w-[75%] w-full mb-7",
    },
    small: {
      label: "mb-2",
      input: "",
    },
  };

  const currentSize = sizeClass[size];

  return (
    <>
      <label
        className={`m-3 text-white text-xl font-medium ${currentSize.label}`}
      >
        {label}
      </label>

      {inputType === "password" ? (
        <div className="relative h-[40px] xl:w-[55%] lg:w-[75%] w-full mb-7">
          <input
            {...register(name)}
            type={showPassword ? "text" : "password"}
            className={`bg-[#e8e8e8] w-full h-full pl-4`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a6a6a6] hover:text-[#1952a6]"
          >
            {showPassword ? (
              <EyeOff size={20} className="text-black" />
            ) : (
              <Eye size={20} className="text-black" />
            )}
          </button>
        </div>
      ) : (
        <input
          {...register(name)}
          type={inputType}
          className={`bg-[#e8e8e8] h-[40px] pl-4 ${currentSize.input}`}
        />
      )}
    </>
  );
}
