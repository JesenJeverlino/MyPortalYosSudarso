import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateClassCard({ variant }: { variant: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {variant == "blue" ? (
        <Link to="/admin-class-details" className="bg-[#1952a6] text-white font-bold flex md:w-[42%] w-[100%] h-[160px] cursor-pointer hover:opacity-70">
          <p className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl p-5 text-left flex-4">Class 11-A</p>
          <div className="flex-1 flex flex-col items-end justify-between p-2 pr-5">
            <Icon icon="mdi-pencil" className="w-[30px] h-[30px]"></Icon>
            <p className="text-lg">60/60</p>
          </div>
        </Link>
      ) : (
        <>
          <button onClick={(e) => {setIsModalOpen(true);}} className="bg-[#d9d9d9] text-black font-bold flex items-center justify-center md:w-[42%] w-[100%] h-[160px] cursor-pointer hover:opacity-50">
            <Icon icon="ic:outline-plus" className="h-auto sm:w-[100px] w-[70px] "></Icon>
            <p className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl p-5 text-left">New Class</p>
          </button>



          {isModalOpen && (
            <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow w-[90%] max-w-md">
                <h2 className="text-lg font-bold mb-4 text-[#1952a6]">Create New Class</h2>
                <form>
                  <input type="text" placeholder="Class Name" className="border border-[#1952a6] p-2 w-full mb-3 rounded" />
                  <input type="number" placeholder="Max Capacity" className="border border-[#1952a6] p-2 w-full mb-3 rounded" />
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="border border-[#1952a6] text-[#1952a6] px-3 py-1 rounded cursor-pointer hover:opacity-50">Cancel</button>
                    <button type="submit" className="bg-[#1952a6] text-white px-3 py-1 rounded cursor-pointer hover:opacity-50">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
