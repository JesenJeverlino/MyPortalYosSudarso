import { Icon } from "@iconify/react";

type propsType = {
    value:string;
    icon:string;
}

export default function FeatureCard({value, icon} : propsType) {
  return (
    <>
      <div className={`h-28 sm:h-14 text-white flex items-center justify-center sm:justify-start border-5 border-[#1952a6] mb-5 bg-[#5398ff]`}>
        <Icon icon={icon} className="md:w-[40px] md:h-[40px] w-[30px] h-[30px] sm:mr-6 sm:ml-6 mr-2 ml-2 sm:block hidden" />
        <p className="xl:text-xl md:text-lg text-base text-center">
          {value}
        </p>
      </div>
    </>
  );
}