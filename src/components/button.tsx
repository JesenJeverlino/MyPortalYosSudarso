type ButtonProps = {
    value: string;
    variant: 'round-blue' | 'round-blue-transparent' | 'square-blue';
  };

export default function Button({variant,value,}: ButtonProps) {

    let variantClass = '';

    if (variant === 'round-blue') {
      variantClass = 'bg-[#1952a6] text-[#fff] text-[1.1rem] rounded-[60px] w-[290px] h-[75px]';
    } else if (variant === 'round-blue-transparent') {
      variantClass = 'bg-transparent border border-white text-white text-[1.1rem] rounded-[60px] w-[240px] h-[65px]';
    } else if (variant === 'square-blue') {
      variantClass = 'bg-[#1952a6] border-2 border-white text-white text-[1.3rem] w-[150px] h-[45px]';
    }
    
  return (
    <>
      <button className={variantClass}>{value}</button>
    </>
  );
}
