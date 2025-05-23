import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function RegisterHeader() {
  return (
    <>
      <div className="flex justify-between m-6 flex-1 sm:flex-row flex-col-reverse sm:gap-0 gap-5">
        <img
          src="logo-yos-sudarso.jpeg"
          className="2xl:w-[90px] w-[70px] 2xl:h-auto h-[90px] rounded-[10px] md:block hidden"
        />
        <p className="text-white mt-5 md:text-4xl text-3xl">REGISTER FORM</p>
        <div className="sm:flex sm:self-auto self-end">
          <Link to="/" className="mb-auto">
            <Button value="Back" variant="square-blue"></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
