import Sidebar from '@/components/sidebar'

export default function UserStudentData() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="w-full h-full bg-white rounded-l-2xl p-5">
            <h2 className="text-5xl">UserStudentData</h2>
          </div>
        </main>
      </div>
    </>
  );
}
