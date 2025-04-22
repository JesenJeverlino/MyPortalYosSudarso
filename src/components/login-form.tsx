import { Link } from "react-router-dom"
import Button from '@/components/button'

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-around flex-1">
      <input
        type="email"
        placeholder="Email"
        className="px-5 w-[70%] h-[70px] mb-[10px] mx-[10px] rounded-[5px] border-2 border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem]"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-5 w-[70%] h-[70px] mb-[10px] mx-[10px] rounded-[5px] border-2 border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem]"
      />
      <Link to="/user-dashboard" className="mb-[40px]">
        <Button value="LOGIN" variant="round-blue" />
      </Link>
    </form>
  );
}
