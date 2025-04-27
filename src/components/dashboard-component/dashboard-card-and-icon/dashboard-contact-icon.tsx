import { Icon } from "@iconify/react";

export default function DashboardContactIcon({href, icon}:{href:string, icon:string}) {
  return (
    <>
      <a href={href}>
        <Icon icon={icon} className="w-[35px] h-[35px] mr-1" />
      </a>
    </>
  );
}