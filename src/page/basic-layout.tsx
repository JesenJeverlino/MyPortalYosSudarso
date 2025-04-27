import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";

export default function BasicLayout() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar></Sidebar>

        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <Outlet />
          </div>
        </main>
        
      </div>
    </>
  );
}