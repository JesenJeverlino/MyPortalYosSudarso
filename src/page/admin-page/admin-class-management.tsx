import AdminHeader from "@/components/admin-header";
import ChooseDayCard from "@/components/other-component/other-sub-component/choose-day-card";
import CreateClassCard from "@/components/other-component/create-class-card";
import CreateSubjectCard from "@/components/other-component/create-subject-card";
import Button from "@/components/other-component/button";
import { useState } from "react";

export default function AdminClassManagement() {

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <hr className="border-3 border-[#5398ff] w-[100%]" />

      <div className="flex items-center">
        <p className="m-5 text-[#1952a6] sm:text-2xl text-xl font-bold flex-grow text-right">Create Subject</p>
        <Button value="Add" variant="square-blue" onClick={() => setIsModalOpen(true)}></Button>
      </div>

      <div>
        <p className="text-[#1952a6] text-lg font-bold text-left mb-5">Viewing Grade 11 Classes...</p>
        <div className="flex flex-wrap justify-between gap-5 sm:flex-row flex-col">
          <CreateSubjectCard></CreateSubjectCard>
          <CreateSubjectCard></CreateSubjectCard>
          <CreateSubjectCard></CreateSubjectCard>
          <CreateSubjectCard></CreateSubjectCard>
        </div>
      </div>

    </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4 text-[#1952a6]">Create New Subject</h2>
            <form>
              <input type="text" placeholder="Subject Name" className="border border-[#1952a6] p-2 w-full mb-3 rounded" />
              <input type="number" placeholder="Max Weekly Hours" className="border border-[#1952a6] p-2 w-full mb-3 rounded" />
              <div className="flex items-center gap-5 mb-3">
                <label>IsMandatory?</label>
                <input type="checkbox"/>
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="border border-[#1952a6] text-[#1952a6] px-3 py-1 rounded cursor-pointer hover:opacity-50">Cancel</button>
                <button type="submit" className="bg-[#1952a6] text-white px-3 py-1 rounded cursor-pointer hover:opacity-50">Submit</button>
              </div>
            </form>
          </div>
        </div>
        )}
    </>
  );
}
