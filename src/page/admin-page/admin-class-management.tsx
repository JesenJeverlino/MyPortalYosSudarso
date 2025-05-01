import Sidebar from "@/components/other-component/sidebar";

export default function AdminClassManagement() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <h1>ini class management</h1>
          </div>
        </main>
      </div>
    </>
  );
}
