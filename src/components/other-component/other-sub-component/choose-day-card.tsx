export default function ChooseDayCard({ value, isActive }: { value: string, isActive: boolean}) {
  return (
    <>
      <button className={`w-[18%] h-[70px] rounded-[30px] flex items-center justify-center text-2xl font-bold cursor-pointer ${isActive ? "bg-[#fff]  text-black border-3  border-[#5398ff]" : "hover:opacity-50 bg-[#5398ff] text-white"}`}>
        {value}
      </button>
    </>
  );
}
