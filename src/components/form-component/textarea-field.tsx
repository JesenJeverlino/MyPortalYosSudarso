export default function TextareaField({ label }: { label: string }) {
  return (
    <>
      <div className="flex flex-col mb-7">
        <label className={`m-4 text-[#1952a6] text-2xl font-bold`}>{label}</label>
        <textarea className={`bg-[#D0E1FA] h-[250px] sm:w-[90%] w-[100%] p-7 pt-4 rounded-[30px] resize-none overflow-hidden`}/>
      </div>
    </>
  );
}
