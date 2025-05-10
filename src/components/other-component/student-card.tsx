import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function StudentCard({navigateTo}:{navigateTo: string}) {
  return (
    <>
      <div className="flex justify-between items-center p-2 border mb-5 md:flex-row flex-col md:gap-0 gap-5 w-[99%]">
        <img src="pp-draft.jpg" className="xl:w-[8%] md:w-[10%] sm:w-[15%] w-[25%] h-auto rounded-full xl:mr-0 mr-5" />
        <h1 className="flex-start md:w-[70%] w-[100%] md:text-left text-center xl:text-2xl md:text-xl text-lg truncate">Muhammad Fadhil Alfarizi Ramadhan (0123456789)</h1>
        <Link to={navigateTo}>
          <Button value="View Details" variant="square-blue"></Button>
        </Link>
      </div>
    </>
  );
}