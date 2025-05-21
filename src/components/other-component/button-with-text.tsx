import { Icon } from "@iconify/react";

type ButtonProps = {
    onClick?: () => void; 
  };

export default function ButtonWithText({onClick}: ButtonProps){
    return(
        <>
        <div className="flex items-center gap-2">
        <p className="text-[#E31B23] font-bold">Delete</p>
        <button className="bg-[#E31B23] mr-5 p-2 hover:opacity-70" onClick={onClick}>
        <Icon icon="material-symbols:delete-outline" className="w-[30px] h-[30px] text-white"/>
        </button>
        </div>
        </>
    )
}