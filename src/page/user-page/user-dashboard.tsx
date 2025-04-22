import Sidebar from '@/components/sidebar'

export default function UserDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
            <div className='rounded-[45px] bg-[#1952a6] h-[160px] w-[90%] flex items-center'>
              <img src="dashboard-blush.png" className='h-[95%] mt-auto mr-4 ml-4'/>
              <h1 className='text-white text-3xl'>All Your Academic Info in One Place! ⭐</h1> 
              {/* besok jadikan header ini component, gw gatau knp dia ga inter, gw ce yang lain inter sih, kalau register form gtw inter ato gk input dan placeholder. kalau login form kemarin should be udh inter..nanti coba cek lagi dah! */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
