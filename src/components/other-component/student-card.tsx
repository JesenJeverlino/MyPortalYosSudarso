import { Link } from "react-router-dom";
import Button from "@/components/other-component/button";

export default function StudentCard({navigateTo}:{navigateTo: string}) {
  return (
    <>
      <div className="flex justify-between items-center p-2 border mb-5">
        <img src="pp-draft.jpg" className="w-[8%] h-auto rounded-full" />
        <h1 className="flex-start text-2xl w-[70%] text-left">Agus Bahagia (0123456789)</h1>
        <Link to={navigateTo}>
          <Button value="View Details" variant="square-blue"></Button>
        </Link>
      </div>
    </>
  );
}