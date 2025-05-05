import ContactIcon from "@/components/dashboard-component/dashboard-sub-component/contact-icon";

export default function DashboardContact() {
  return (
    <>
      <div className="flex flex-col">
        <p className="md:self-end text-center text-2xl mt-4 mb-5">
          Have Questions? Contact Us!
        </p>
        <div className="flex">
          <img src="blush/dashboard-blush-2.png" className="xl:w-[55%] 2xl:h-auto xl:h-[350px] lg:w-[40%] lg:h-[320px] md:w-[45%] md:h-[350px] md:block hidden" />
          <div className="bg-[#1952a6] text-white flex flex-col relative">
            <p className="text-2xl text-center pt-4 flex-1">SMAK YOS SUDARSO</p>
            <div className="flex-8 flex flex-col justify-between p-5 sm:w-[80%] w-full md:gap-0 gap-10 text-base 2xl:text-lg">
              <p className="font-light">Jl. Dang merdu No.2 Kel. Teluk Tering Kec. Batam Kota Kota Batam – Provinsi Kep. Riau</p>
              <p className="font-light">Service Hours: Monday – Friday (except public holidays) → 08:00 – 15:00 WIB</p>
              <p className="font-medium">Telp: 0778-461547</p>
              <div className="flex gap-3">
                <ContactIcon href='https://maps.app.goo.gl/f6WhLHkGosjce1Kc6' icon='mynaui:location'></ContactIcon>
                <ContactIcon href='https://www.youtube.com/@smakyssmakyossudarsobatam6444' icon='line-md:youtube'></ContactIcon>
                <ContactIcon href='https://wa.me/0778461547' icon='ic:outline-whatsapp'></ContactIcon>
                <ContactIcon href='https://www.instagram.com/smakysgram/?hl=en' icon='mdi:instagram'></ContactIcon>
                <ContactIcon href='https://www.facebook.com/smakysbatam/?locale=id_ID' icon='mingcute:facebook-line'></ContactIcon>
              </div>
            </div>
            <img
              src="logo-yos-sudarso.jpeg"
              className="absolute w-[20%] h-auto bottom-3 right-3 sm:block hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
