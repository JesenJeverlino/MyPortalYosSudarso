import DashboardQuickAccCard from "@/components/dashboard-component/dashboard-card-and-icon/dashboard-quick-acc-card";

type propsType = {
  value: string[];
  icon: string[];
  navigateTo: string[];
};

export default function DashboardQuickAcc({value, icon, navigateTo}: propsType) {
  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <p className="self-end text-2xl mt-4 mb-5">Find What You Need, Fast!</p>
        <div className="flex justify-between">
          <DashboardQuickAccCard value={value[0]} icon={icon[0]} navigateTo={navigateTo[0]}></DashboardQuickAccCard>
          <DashboardQuickAccCard value={value[1]} icon={icon[1]} navigateTo={navigateTo[1]}></DashboardQuickAccCard>
          <DashboardQuickAccCard value={value[2]} icon={icon[2]} navigateTo={navigateTo[2]}></DashboardQuickAccCard>
        </div>
      </div>
    </>
  );
}