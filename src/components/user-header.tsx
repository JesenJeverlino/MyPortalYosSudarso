export default function UserHeader({
  img,
  value,
}: {
  img: string;
  value: string;
}) {
  return (
    <>
      <div className="rounded-[45px] bg-[#1952a6] flex items-center justify-center relative w-[90%] lg:h-[160px] sm:h-[110px] sm:mt-0 mt-15">
        <img
          src={img}
          className="absolute left-0 bottom-0 xl:h-full h-[90%] 2xl:ml-15 ml-5 xl:block hidden"
        />
        <h1 className="text-white lg:text-3xl sm:text-2xl text-sm sm:p-0 p-3 pt-5 pb-5">
          {value}
        </h1>
      </div>
    </>
  );
}
