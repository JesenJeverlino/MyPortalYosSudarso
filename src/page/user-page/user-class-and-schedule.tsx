import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import ChooseDay from "@/components/choose-day";
import Table from "@/components/table";

export default function UserClassAndSchedule() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <Header></Header>
            <ChooseDay></ChooseDay>
            <Table></Table>
          </div>
        </main>
      </div>
    </>
  );
}
