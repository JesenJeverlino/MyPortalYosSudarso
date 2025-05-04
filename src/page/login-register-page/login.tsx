import LoginCardLeft from "@/components/login-component/login-card-left";
import LoginCardRight from "@/components/login-component/login-card-right";

export default function Login() {
  return (
    <>
      <div className="rounded-[20px] flex lg:w-[65%] md:w-[75%] w-full xl:h-[70%] md:h-[55%] h-[65%] md:flex-row flex-col">
        <LoginCardLeft></LoginCardLeft>
        <LoginCardRight></LoginCardRight>
      </div>
    </>
  );
}