import { useFormContext } from "react-hook-form";

export default function AttachImgField({src, name, disabled, onChange}:{src:string, name:string, disabled:boolean, onChange?:(e: React.ChangeEvent<HTMLInputElement>)=> void}) {

    const { register } = useFormContext();

  return (
    <>
      <div className="flex flex-col mb-7">
        <label className="m-4 text-[#1952a6] text-2xl font-bold">Profile Picture</label>
        <label htmlFor="profile-picture">
          <img src={src} className={`xl:w-[20%] md:w-[25%] sm:w-[30%] w-[50%] h-auto rounded-full mb-3 ${disabled ? "border-none" : "border-5 border-[#1952a6]"}`}/>
        </label>
        <input {...register(name!)} accept=".jpg,.jpeg,.png" type="file" id="profile-picture" className="hidden" disabled={disabled} onChange={onChange}/>
      </div>
    </>
  );
}