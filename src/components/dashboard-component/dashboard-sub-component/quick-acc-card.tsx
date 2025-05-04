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
        <div className="bg-[#5398ff] text-white flex flex-col items-center justify-center hover:opacity-70 2xl:w-[360px] 2xl:h-[360px] xl:w-[290px] xl:h-[290px] lg:w-[215px] lg:h-[215px] md:w-[140px] md:h-[140px] w-[100px] h-[100px]">
          <Icon icon={icon} className="w-[50px] h-[50px]" />
          <p className="text-2xl text-center p-3">
            {value}
          </p>
        </div>
      </Link>
    </>
  );
}