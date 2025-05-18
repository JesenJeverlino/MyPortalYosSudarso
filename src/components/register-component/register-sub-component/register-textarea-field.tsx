import { useFormContext } from "react-hook-form";

export default function RegisterTextareaField({ label, name}: { label: string, name:string }) {
  const { register } = useFormContext();
  return (
    <>
      <label className={`m-3 text-white text-xl font-medium block`}>
        {label}
      </label>
      <textarea
        {...register(name)} className={`bg-[#e8e8e8] h-[150px] p-4 pt-2 pb-2 xl:w-[55%] lg:w-[65%] md:w-[70%] w-full mb-7 resize-y`}
      />
    </>
  );
}
