import { Link } from "react-router-dom";
import Button from "@/components/button";
import LoginForm from "@/components/login-form";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[url('/morphism-background-image.jpg')] bg-cover">
        <div className="w-[60%] h-[70%] rounded-[20px] flex overflow-hidden">
          {/* Card Left Side */}
          <div className="flex-1 bg-[#1952a6]/80 text-white flex flex-col">
            <div className="flex m-[10px]">
              <img
                src="logo-yos-sudarso.jpeg"
                className="w-[50px] h-auto rounded-[10px] mr-[10px]"
              />
              <h3 className="text-[1.1rem] font-semibold">
                SMAK YOS SUDARSO BATAM
              </h3>
            </div>
            <div className="h-[70%] flex flex-col justify-around text-center">
              <h1 className="text-4xl font-bold">Hello, Friend!</h1>
              <p className="font-extralight ml-10 mr-10">
                Enter your personal details and start journey with us
              </p>
              <Link to="/register" className="ml-auto mr-auto">
                <Button value="REGISTER" variant="round-blue-transparent" />
              </Link>
            </div>
          </div>
          {/* Card Right Side */}
          <div className="flex-2 flex flex-col bg-white/80">
            <h1 className="text-4xl font-bold text-[#1952a6] mt-10 mb-6 text-center">
              Welcome to MyPortal
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
