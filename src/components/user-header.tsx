export default function UserHeader({img, value}:{img:string, value:string}) {
  return (
    <>
      <div className="rounded-[45px] bg-[#1952a6] h-[160px] w-[90%] flex items-center justify-center relative">
        <img src={img} className="h-full ml-15 absolute left-0"/>
        <h1 className="text-white text-3xl">{value}</h1>
      </div>
    </>
  );
}