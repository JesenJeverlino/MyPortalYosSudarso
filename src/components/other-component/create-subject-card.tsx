import { Icon } from "@iconify/react";
import { useState } from "react";

export default function CreateSubjectCard() {

  const [isOpen, setIsOpen] = useState(false);
  const [subjectName, setSubjectName] = useState("Mathematics");
  const [isMandatory, setIsMandatory] = useState("Yes");
  const [weeklyHours, setWeeklyHours] = useState(5);

    const handleSave = () => {
    setIsOpen(false);
  };

  return (
    <>
        <div onClick={() => setIsOpen(true)} className="bg-[#1952a6] text-white font-bold flex md:w-[42%] w-[100%] h-[160px] cursor-pointer hover:opacity-70 flex flex-col relative">
          <p className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl p-5 text-left flex-4">Mathematics</p>
          <p className="pl-5 font-extralight">Max Weekly Hours: <span className="font-bold">5 Hours</span></p>
          <p className="pl-5 pb-5 font-extralight">IsMandatory: <span className="font-bold">Yes</span></p>
            <Icon icon="mdi-pencil" className="w-[30px] h-[30px] absolute top-5 right-5"></Icon>
        </div>

        {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-[#1952a6] mb-2">Edit Subject</h2>

            <div>
              <label className="block text-sm mb-1">Subject Name</label>
              <input
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="w-full border border-[#1952a6] rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Is Mandatory</label>
              <select
                value={isMandatory}
                onChange={(e) => setIsMandatory(e.target.value)}
                className="w-full border border-[#1952a6] rounded px-3 py-1"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Max Weekly Hours</label>
              <input
                type="number"
                min="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full border border-[#1952a6] rounded px-3 py-1"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#1952a6] border border-[#1952a6] px-4 py-1 rounded hover:bg-[#1952a6] hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#1952a6] text-white px-4 py-1 rounded hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}