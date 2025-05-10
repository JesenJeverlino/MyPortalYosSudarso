export default function AttachImgField() {
  return (
    <>
      <div className="flex flex-col mb-7">
        <label className="m-4 text-[#1952a6] text-2xl font-bold">Profile Picture</label>
        <label htmlFor="profile-picture">
          <img src="pp-draft.jpg" className="xl:w-[20%] md:w-[25%] sm:w-[30%] w-[50%] h-auto rounded-full mb-3"/>
        </label>
        <input type="file" id="profile-picture" className="hidden" />
      </div>
    </>
  );
}