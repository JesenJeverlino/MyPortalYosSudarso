type Props = {
  value: string;
  isActive: boolean;
  onClick?: () => void;
};

export default function ChooseDayCard({ value, isActive, onClick }: Props) {
  return (
    <>
      <button onClick={onClick} className={`sm:w-[18%] w-[15%] sm:h-[70px] h-[50px] rounded-[30px] flex items-center justify-center 2xl:text-2xl sm:text-xl text-lg font-bold cursor-pointer ${isActive ? "bg-[#fff]  text-black border-3  border-[#5398ff]" : "hover:opacity-50 bg-[#5398ff] text-white"}`}>
        {value}
      </button>
    </>
  );
}
