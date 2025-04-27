export default function AdminDashboardStudentData() {
  return (
    <>
      <div className="mt-10 flex">
        <div className="flex-4">
          <form action="">
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>

            <div className="flex mb-7">
              <div className="flex flex-col flex-1">
                <label className="m-4 text-[#1952a6] text-2xl font-bold">
                  NISN
                </label>
                <input
                  type="text"
                  className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="m-4 text-[#1952a6] text-2xl font-bold">
                  NISN
                </label>
                <input
                  type="text"
                  className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
                />
              </div>
            </div>

            <div className="flex mb-7">
              <div className="flex flex-col flex-1">
                <label className="m-4 text-[#1952a6] text-2xl font-bold">
                  NISN
                </label>
                <input
                  type="text"
                  className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="m-4 text-[#1952a6] text-2xl font-bold">
                  NISN
                </label>
                <input
                  type="text"
                  className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="m-4 text-[#1952a6] text-2xl font-bold">
                  NISN
                </label>
                <input
                  type="text"
                  className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"
                />
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[90%] pl-5 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>
            <div className="flex flex-col mb-7">
              <label className="m-4 text-[#1952a6] text-2xl font-bold">
                NISN
              </label>
              <input
                type="text"
                className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"
              />
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-col text-center">
          <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
            Profile Picture
          </h1>
          <label htmlFor="profile-picture">
            <img
              src="pp-draft.jpg"
              className="w-[50%] h-auto rounded-full mb-3 mx-auto"
            />
          </label>
          <input type="file" id="profile-picture" className="hidden" />
        </div>
      </div>
    </>
  );
}
