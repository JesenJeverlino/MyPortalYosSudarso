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
        <div className="bg-[#5398ff] text-white w-[300px] h-[300px] flex flex-col items-center justify-center">
          <Icon icon={icon} className="w-[50px] h-[50px] mr-6 ml-6" />
          <p className="text-2xl text-center p-3">
            {value}
          </p>
        </div>
      </Link>
    </>
  );
}