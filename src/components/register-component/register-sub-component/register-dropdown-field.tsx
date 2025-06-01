import { useFormContext } from "react-hook-form";

type propsType = {
  label: string;
  options: string[];
  name: string;
};

export default function RegisterDropdownField({
  label,
  options,
  name,
}: propsType) {
  const { register } = useFormContext();

  return (
    <>
      <label className={`m-3 text-white text-xl font-medium mb-2`}>
        {label}
      </label>
      <select
        className="bg-[#e8e8e8] h-[40px] pl-4"
        {...register(name)}
        id={name}
      >
        {options.map((option, index) => (
          <option key={index + 1} value={index + 1}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
