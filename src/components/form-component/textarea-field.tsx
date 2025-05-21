import { useFormContext } from "react-hook-form";

export default function TextareaField({
  label,
  name,
  disabled,
  value,
}: {
  label: string;
  name?: string;
  value?:string;
  disabled?: boolean;
}) {
    const methods = useFormContext();

  if (!methods) {
    return (
      <>
      <div className="flex flex-col mb-7">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>
          {label}
        </label>
        <textarea
        value={value}
          disabled={disabled}
          className={`bg-[#D0E1FA] h-[250px] sm:w-[90%] w-[100%] p-7 pt-4 rounded-[30px] resize-none overflow-hidden ${disabled ? "border-none" : "border border-[#1952a6]"}`}
        />
      </div>
      </>
    );
  }

  const { register } = useFormContext();
  return (
    <>
      <div className="flex flex-col mb-7">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>
          {label}
        </label>
        <textarea
          {...register(name!)}
          disabled={disabled}
          className={`bg-[#D0E1FA] h-[250px] sm:w-[90%] w-[100%] p-7 pt-4 rounded-[30px] resize-none overflow-hidden ${disabled ? "border-none" : "border border-[#1952a6]"}`}
        />
      </div>
    </>
  );
}
