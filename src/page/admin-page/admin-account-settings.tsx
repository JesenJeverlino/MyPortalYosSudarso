import Sidebar from "@/components/sidebar";
import Button from "@/components/other-component/button"

export default function AdminAccountSettings() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* Main content */}
        <main className="flex-1 min-h-screen bg-[#1952a6] overflow-auto">
          <div className="flex flex-col items-center w-full h-full bg-white rounded-l-2xl p-5">
          <h1 className="text-[#1952a6] text-5xl font-bold mt-10 w-[90%]">Student Data</h1>
              <div className="mt-20 w-[90%] flex">
                  <div className="flex-4">
                    <form action="">
                      <div className="flex flex-col mb-7">
                        <label className="m-4 text-[#1952a6] text-2xl font-bold">
                          Username
                        </label>
                        <input
                          type="text"
                          className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
                        />
                      </div>
                      <div className="flex flex-col mb-7">
                        <label className="m-4 text-[#1952a6] text-2xl font-bold">
                          Email
                        </label>
                        <input
                          type="text"
                          className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
                        />
                      </div>
                      <div className="flex flex-col mb-7">
                        <label className="m-4 text-[#1952a6] text-2xl font-bold">
                          Email
                        </label>
                        <input
                          type="text"
                          className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
                        />
                      </div>
                      <div className="flex flex-col mb-7">
                        <label className="m-4 text-[#1952a6] text-2xl font-bold">
                          Profile Picture
                        </label>
                        <label htmlFor="profile-picture">
                          <img
                            src="pp-draft.jpg"
                            className="w-[20%] h-auto rounded-full mb-3"
                          />
                        </label>
                        <input type="file" id="profile-picture" className="hidden"/>
                      </div>
                    </form>
                  </div>
                  <div className="flex-1 flex flex-col items-end">
                    <Button value="Edit" variant="square-yellow"></Button>
                  </div>
                </div>
          </div>
        </main>
      </div>
    </>
  );
}
