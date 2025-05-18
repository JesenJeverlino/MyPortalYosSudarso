import { Icon } from "@iconify/react";

export default function ButtonWithText(){
    return(
        <>
        <div className="flex items-center gap-2">
        <p className="text-[#E31B23] font-bold">Delete</p>
        <button className="bg-[#E31B23] mr-5 p-2">
        <Icon icon="material-symbols:delete-outline" className="w-[30px] h-[30px] text-white"/>
        </button>
        </div>
        </>
    )
}