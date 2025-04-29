export default function StudentDataAttachImgField() {
  return (
    <>
      <div className="flex flex-col mb-7">
        <label className="m-4 text-[#1952a6] text-2xl font-bold">
          Profile Picture
        </label>
        <label htmlFor="profile-picture">
          <img
            src="pp-draft.jpg"
            className="w-[20%] h-auto rounded-full mb-3"
          />
        </label>
        <input type="file" id="profile-picture" className="hidden" />
      </div>
    </>
  );
}