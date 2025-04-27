type propsType = {
  label: string;
  options: string[];
};

export default function RegisterDropdownField({ label, options }: propsType) {
  return (
    <>
      <label className={`m-3 text-white text-xl font-medium mb-2`}>
        {label}
      </label>
      <select className="bg-[#e8e8e8] h-[40px] pl-4">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}