import AdminHeader from "@/components/admin-header";
import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";
import CreateClassCard from "@/components/other-component/create-class-card";
import Button from "@/components/other-component/button";

export default function AdminClassManagement() {
  return (
    <>
    <AdminHeader value="Class Management"></AdminHeader>

    <div className="mt-20 flex flex-col gap-20 w-[90%]">
      <div className="xl:w-[100%] md:w-[120%] sm:w-[150%] w-[200%]">
        <div className="flex gap-3">
          <ChooseDayCard value="10" isActive={false}></ChooseDayCard>
          <ChooseDayCard value="11" isActive={true}></ChooseDayCard>
          <ChooseDayCard value="12" isActive={false}></ChooseDayCard>
        </div>
      </div>

      <div className="flex items-center">
        <p className="m-5 text-[#1952a6] sm:text-2xl text-xl font-bold flex-grow text-right">Allow KRS Submission</p>
        <Button value="Disable" variant="square-blue"></Button>
      </div>

      <div>
        <p className="text-[#1952a6] text-lg font-bold text-left mb-5">Viewing Grade 11 Classes...</p>
        <div className="flex flex-wrap justify-between gap-5 sm:flex-row flex-col">
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="blue"></CreateClassCard>
          <CreateClassCard variant="whitoss"></CreateClassCard>
        </div>
      </div>
    </div>
    </>
  );
}
