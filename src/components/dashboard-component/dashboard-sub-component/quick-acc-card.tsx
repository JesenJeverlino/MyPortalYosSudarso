import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

type propsType = {
  value: string;
  icon: string;
  navigateTo: string;
};

export default function DashboardQuickAccCard({value, icon, navigateTo}: propsType) {
  return (
    <>
      <Link to={navigateTo}>
        <div className="bg-[#5398ff] text-white flex flex-col items-center justify-center hover:opacity-70 2xl:w-[360px] 2xl:h-[360px] xl:w-[290px] xl:h-[290px] md:w-[210px] md:h-[210px] w-[270px] h-[270px]">
          <Icon icon={icon} className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]" />
          <p className="text-center p-3 lg:text-2xl text-xl">
            {value}
          </p>
        </div>
      </Link>
    </>
  );
}