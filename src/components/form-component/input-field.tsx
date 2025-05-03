type propsType = {
  value: string;
  inputType: string;
  size: "large" | "small";
};

export default function InputField({ value, inputType, size }:propsType) {

    const sizeClass = {
        large: "mb-7",
        small: "flex-1"
    }

    const currentSize = sizeClass[size];

  return (
    <>
      <div className={`flex flex-col ${currentSize}`}>
        <label className="m-4 text-[#1952a6] text-2xl font-bold">{value}</label>
        <input type={inputType} className={`bg-[#D0E1FA] h-[55px] pl-5 pr-5 rounded-[30px] w-[80%]`}/>
      </div>
    </>
  );
}