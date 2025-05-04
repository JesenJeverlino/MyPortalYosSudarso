type ButtonProps = {
    value: string;
    variant: 'round-blue' | 'round-blue-transparent' | 'square-blue' | 'square-yellow'| 'square-green'| 'square-red';

  };

export default function Button({variant,value,}: ButtonProps) {

    let variantClass = '';

    if (variant === 'round-blue') {
      variantClass = 'bg-[#1952a6] text-[#fff] text-[1.1rem] rounded-[60px] w-[290px] h-[75px] hover:opacity-70 2xl:w-[350px]';
    } else if (variant === 'round-blue-transparent') {
      variantClass = 'bg-transparent border border-white text-white text-[1.1rem] rounded-[60px] w-[240px] h-[65px] hover:opacity-50 2xl:w-[270px]';
    } else if (variant === 'square-blue') {
      variantClass = 'bg-[#1952a6] border-2 border-white text-white text-[1.3rem] w-[150px] h-[45px] hover:opacity-50';
    } else if (variant === 'square-yellow') {
      variantClass = 'bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70';
    } else if (variant === 'square-green') {
      variantClass = 'bg-[#4CAF50] text-[1.2rem] text-white w-[180px] h-[45px] font-bold hover:opacity-70';
    } else if (variant === 'square-red') {
      variantClass = 'bg-[#E31B23] text-[1.2rem] text-white w-[180px] h-[45px] font-bold hover:opacity-70';
    }
    
  return (
    <>
      <button className={`cursor-pointer ${variantClass}`}>{value}</button>
    </>
  );
}