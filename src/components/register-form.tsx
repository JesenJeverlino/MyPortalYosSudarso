import { Link } from "react-router-dom";
import Button from "@/components/button";

export default function RegisterForm() {
  return (
    <>
      <form className="mx-auto max-w-[80%]">
        <label className="m-3 text-white text-xl block font-medium">NISN</label>
        <input
          type="number"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <label className="m-3 text-white text-xl block font-medium">
          Full Name
        </label>
        <input
          type="text"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7  pl-4"
        />

        <div className="flex flex-wrap gap-6 mb-7">
          <div className="flex flex-col w-[29%]">
            <label className="m-3 text-white text-xl font-medium mb-2">
              Date of Birth
            </label>
            <input type="date" className="bg-[#e8e8e8] h-[40px] pl-4" />
          </div>
          <div className="flex flex-col w-[29%]">
            <label className="m-3 text-white text-xl font-medium mb-2">
              Phone Number
            </label>
            <input type="number" className="bg-[#e8e8e8] h-[40px] pl-4" />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-7">
          <div className="flex flex-col w-[18%]">
            <label className="m-3 text-white text-xl font-medium mb-2">
              Class
            </label>
            <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
          </div>
          <div className="flex flex-col w-[18%]">
            <label className="m-3 text-white text-xl font-medium mb-2">
              Gender
            </label>
            <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
          </div>
          <div className="flex flex-col w-[18%]">
            <label className="m-3 text-white text-xl font-medium mb-2">
              Religion
            </label>
            <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
          </div>
        </div>

        <label className="m-3 text-white text-xl block font-medium">
          Address
        </label>
        <input
          type="text"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <label className="m-3 text-white text-xl block font-medium">
          Parent's Name
        </label>
        <input
          type="text"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <label className="m-3 text-white text-xl block font-medium">
          Parent's Phone Number
        </label>
        <input
          type="number"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <label className="m-3 text-white text-xl block font-medium">
          Email
        </label>
        <input
          type="email"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <label className="m-3 text-white text-xl block font-medium">
          Password
        </label>
        <input
          type="password"
          className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"
        />
        <br></br>
        <div className="block flex flex-row-reverse mb-10">
          <Link to="/" className="mb-[40px]">
            <Button value="OK" variant="square-blue"></Button>
          </Link>
        </div>
      </form>
    </>
  );
}
