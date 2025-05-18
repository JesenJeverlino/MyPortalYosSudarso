type ButtonProps = {
    variant: 'round-blue' | 'round-blue-transparent' | 'square-blue' | 'square-yellow'| 'square-green'| 'square-red';
    onClick?: () => void; 
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    value: string;
  };

export default function Button({variant, onClick, type, disabled, value}: ButtonProps) {

    let variantClass = '';

    if (variant === 'round-blue') {
      variantClass = 'bg-[#1952a6] text-[#fff] text-[1.1rem] rounded-[60px] hover:opacity-70 2xl:w-[350px] 2xl:w-[290px] xl:w-[270px] lg:w-[250px] md:w-[200px] w-[150px] lg:h-[75px] h-[55px]';
    } else if (variant === 'round-blue-transparent') {
      variantClass = 'bg-transparent border border-white text-white rounded-[60px] hover:opacity-50 2xl:w-[270px] xl:w-[240px] lg:w-[200px] md:w-[170px] lg:h-[65px] w-[130px] md:h-[50px] h-[50px] lg:text-[1.1rem] text-[0.8rem]';
    } else if (variant === 'square-blue') {
      variantClass = 'bg-[#1952a6] text-white hover:opacity-50 text-[1.3rem] w-[150px] h-[45px]';
    } else if (variant === 'square-yellow') {
      variantClass = 'bg-[#FCD30A] text-[1.3rem] w-[150px] h-[45px] font-bold hover:opacity-70';
    } else if (variant === 'square-green') {
      variantClass = 'bg-[#4CAF50] text-[1.2rem] text-white w-[180px] h-[45px] font-bold hover:opacity-70';
    } else if (variant === 'square-red') {
      variantClass = 'bg-[#E31B23] text-[1.2rem] text-white w-[180px] h-[45px] font-bold hover:opacity-70';
    }
    
  return (
    <>
      <button className={`cursor-pointer ${variantClass}`} onClick={onClick} type={type} disabled={disabled}>{value}</button>
    </>
  );
}