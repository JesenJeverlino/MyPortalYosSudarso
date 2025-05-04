import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import Sidebar from "@/components/sidebar";

export default function BasicLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex">

        {/* Toogle Sidebar Button */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`bg-[#1952a6] border-2 absolute md:hidden fixed top-4 left-4 z-50  p-2 rounded shadow ${sidebarOpen ? "hidden":""}`}>
          <Icon icon={sidebarOpen ? "" : "material-symbols:menu"} className="w-6 h-6 text-white" />
        </button>

        {/* Sidebar */}
        {(sidebarOpen || window.innerWidth >= 768) && (
        <Sidebar onClose={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white md:rounded-l-2xl p-5">
            <Outlet />
          </div>
        </main>
        
      </div>
    </>
  );
}