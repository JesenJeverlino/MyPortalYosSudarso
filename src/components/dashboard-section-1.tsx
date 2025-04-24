import { Icon } from "@iconify/react";

export default function DashboardSectionOne() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%]">
        <h1 className="text-[3.5rem]">Welcome to MyPortal, Friends!</h1>
        <p className="text-2xl">Glad to see you here. Let's get started!</p>
        <div className="flex flex-col">
          <p className="self-end text-2xl mt-4 mb-5">
            Your Account at a Glance
          </p>
          <div className="bg-[#E31B23] text-white flex h-14 items-center border-5 border-[#1952a6] mb-5">
            <Icon icon="ph:student" className="w-[40px] h-[40px] mr-6 ml-6" />
            <h1 className="text-xl">
              Your Student data is incomplete. Please review your details.
            </h1>
          </div>
          <div className="bg-[#4CAF50] text-white flex h-14 items-center border-5 border-[#1952a6] mb-5">
            <Icon icon="ph:student" className="w-[40px] h-[40px] mr-6 ml-6" />
            <h1 className="text-xl">
              Your Student data is incomplete. Please review your details.
            </h1>
          </div>
          <div className="bg-[#4CAF50] text-white flex h-14 items-center border-5 border-[#1952a6] mb-5">
            <Icon icon="ph:student" className="w-[40px] h-[40px] mr-6 ml-6" />
            <h1 className="text-xl">
              Your Student data is incomplete. Please review your details.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
