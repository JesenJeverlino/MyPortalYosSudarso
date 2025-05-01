import { Link } from "react-router-dom";
import Button from "./other-component/button";

export default function AdminDashboardTwo() {
  const adaGak = false;

  return (
    <>
      <div className="mt-20 text-[#1952a6] font-bold w-[90%] flex flex-col">
        <h1 className="text-2xl mt-4 mb-5">
          Pending Student Account Approvals
        </h1>
        <div className="flex flex-col items-center">
          {adaGak ? (
            <h1 className="mt-50 mb-50">
              "No account registration requests at the moment. Please check back
              later!"
            </h1>
          ) : (
            <>
              <div className="flex justify-between items-center p-2 border mb-5">
                <img
                  src="pp-draft.jpg"
                  className="w-[8%] h-auto rounded-full"
                />
                <h1 className="flex-start text-2xl w-[70%] text-left">
                  Agus Bahagia (0123456789)
                </h1>
                <Link to="/admin-dashboard-approve-details">
                <Button value="View Details" variant="square-blue"></Button>
                </Link>
              </div>
              <div className="flex justify-between items-center p-2 border mb-5">
                <img
                  src="pp-draft.jpg"
                  className="w-[8%] h-auto rounded-full"
                />
                <h1 className="flex-start text-2xl w-[70%] text-left">
                  Agus Bahagia (0123456789)
                </h1>
                <Link to="/admin-dashboard-approve-details">
                <Button value="View Details" variant="square-blue"></Button>
                </Link>
              </div>
              <div className="flex justify-between items-center p-2 border mb-5">
                <img
                  src="pp-draft.jpg"
                  className="w-[8%] h-auto rounded-full"
                />
                <h1 className="flex-start text-2xl w-[70%] text-left">
                  Agus Bahagia (0123456789)
                </h1>
                <Link to="/admin-dashboard-approve-details">
                <Button value="View Details" variant="square-blue"></Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
