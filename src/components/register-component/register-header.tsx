import { Link } from "react-router-dom";
import Button from "@/components/button";

export default function RegisterHeader() {
  return (
    <>
      <div className="flex justify-between m-6 flex-1">
        <img
          src="logo-yos-sudarso.jpeg"
          className="w-[70px] h-auto rounded-[10px]"
        />
        <p className="text-white text-4xl mt-5">REGISTER FORM</p>
        <Link to="/" className="mb-auto">
          <Button value="Back" variant="square-blue"></Button>
        </Link>
      </div>
    </>
  );
}