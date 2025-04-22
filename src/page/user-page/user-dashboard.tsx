import Sidebar from '@/components/sidebar'

export default function UserDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="w-full h-full bg-white rounded-l-2xl p-5">
            <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
          </div>
        </main>
      </div>
    </>
  );
}
