import { Icon } from "@iconify/react";

export default function DashboardSectionThree() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <p className="self-end text-2xl mt-4 mb-5">
          Have Questions? Contact Us!
        </p>
        <div className="flex">
          <img src="dashboard-blush-2.png" className="flex-3"/>
          <div className="bg-[#1952a6] flex-2 text-white flex flex-col relative">
            <h1 className="text-2xl text-center pt-4 flex-1">
              SMAK YOS SUDARSO
            </h1>
            <div className="flex-6 flex flex-col justify-between p-5 w-[80%]">
              <p className="font-light">
                Jl. Dang merdu No.2 Kel. Teluk Tering Kec. Batam Kota Kota Batam
                – Provinsi Kep. Riau
              </p>
              <p className="font-light">
                Service Hours: Monday–Friday (except public holidays) → 08:00 –
                15:00 WIB
              </p>
              <p className="font-medium">Telp: 0778-461547</p>
              <div className="flex">
                <Icon icon="nimbus:location" className="w-[35px] h-[35px] mr-1" />
                <Icon icon="nimbus:location" className="w-[35px] h-[35px] mr-1" />
                <Icon icon="nimbus:location" className="w-[35px] h-[35px] mr-1" />
                <Icon icon="nimbus:location" className="w-[35px] h-[35px] mr-1" />
                <Icon icon="nimbus:location" className="w-[35px] h-[35px] mr-1" />
              </div>
            </div>
            <img
              src="logo-yos-sudarso.jpeg"
              className="absolute w-[110px] h-auto bottom-3 right-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
