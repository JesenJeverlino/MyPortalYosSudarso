type propsType = {
  label: string;
  inputType: string;
  size: "large" | "small";
};

export default function RegisterInputField({ label, inputType, size }: propsType) {

    const sizeClass = {
        large:{
            label:"block",
            input:"w-[55%] mb-7"
        },
        small:{
            label:"mb-2",
            input:""
        }
    }

    const currentSize = sizeClass[size];


  return (
    <>
      <label className={`m-3 text-white text-xl font-medium ${currentSize.label}`}>{label}</label>
      <input type={inputType} className={`bg-[#e8e8e8] h-[40px] pl-4 ${currentSize.input}`}/>
    </>
  );
}