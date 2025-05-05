import QuickAccCard from "@/components/dashboard-component/dashboard-sub-component/quick-acc-card";

type propsType = {
  value: string[];
  icon: string[];
  navigateTo: string[];
};

export default function DashboardQuickAcc({value, icon, navigateTo}: propsType) {
  return (
    <>
      <div className="flex flex-col">
        <p className="md:self-end text-center text-2xl mt-4 mb-5 ">Find What You Need, Fast!</p>
        <div className="flex justify-between md:flex-row flex-col items-center md:gap-0 gap-5">
          <QuickAccCard value={value[0]} icon={icon[0]} navigateTo={navigateTo[0]}></QuickAccCard>
          <QuickAccCard value={value[1]} icon={icon[1]} navigateTo={navigateTo[1]}></QuickAccCard>
          <QuickAccCard value={value[2]} icon={icon[2]} navigateTo={navigateTo[2]}></QuickAccCard>
        </div>
      </div>
    </>
  );
}