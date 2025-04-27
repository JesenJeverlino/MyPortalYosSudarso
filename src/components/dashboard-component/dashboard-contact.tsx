import DashboardContactIcon from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-contact-icon";

export default function DashboardContact() {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <p className="self-end text-2xl mt-4 mb-5">
          Have Questions? Contact Us!
        </p>
        <div className="flex">
          <img src="blush/dashboard-blush-2.png" className="flex-3" />
          <div className="bg-[#1952a6] flex-2 text-white flex flex-col relative">
            <p className="text-2xl text-center pt-4 flex-1">SMAK YOS SUDARSO</p>
            <div className="flex-8 flex flex-col justify-between p-5 w-[80%]">
              <p className="font-light">
                Jl. Dang merdu No.2 Kel. Teluk Tering Kec. Batam Kota Kota Batam
                – Provinsi Kep. Riau
              </p>
              <p className="font-light">
                Service Hours: Monday–Friday (except public holidays) → 08:00 –
                15:00 WIB
              </p>
              <p className="font-medium">Telp: 0778-461547</p>
              <div className="flex gap-2">
                <DashboardContactIcon href='https://maps.app.goo.gl/f6WhLHkGosjce1Kc6' icon='mynaui:location'></DashboardContactIcon>
                <DashboardContactIcon href='https://www.youtube.com/@smakyssmakyossudarsobatam6444' icon='line-md:youtube'></DashboardContactIcon>
                <DashboardContactIcon href='https://wa.me/0778461547' icon='ic:outline-whatsapp'></DashboardContactIcon>
                <DashboardContactIcon href='https://www.instagram.com/smakysgram/?hl=en' icon='mdi:instagram'></DashboardContactIcon>
                <DashboardContactIcon href='https://www.facebook.com/smakysbatam/?locale=id_ID' icon='mingcute:facebook-line'></DashboardContactIcon>
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
