import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuth } from "@/other/authContext";
import { useState, useEffect } from "react";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { loginInfo, logout } = useAuth();

  const imagePath = loginInfo?.imagePath ?? null;
  const name = loginInfo?.fullname ?? null;

  const [userRole, setUserRole] = useState<{
    userId: number;
    role: string;
  } | null>(null);
  const keAdmin = userRole?.role === "Admin";

  useEffect(() => {
    const stored = localStorage.getItem("userRole");
    if (stored) {
      setUserRole(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <aside
        className={`w-68 bg-[#1952a6] text-white flex flex-col p-2
        fixed h-screen z-50 top-0 left-0
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0 lg:transform-none lg:h-auto`}
      >
        <div className="lg:hidden flex justify-end p-2 ">
          <button
            onClick={onClose}
            className="rounded text-white border-2 border-white"
          >
            <Icon icon="material-symbols:close" className="w-8 h-8" />
          </button>
        </div>

        <div className="flex mb-12 p-2">
          <img src="logo-yos-sudarso.jpeg" className="w-[40px] h-auto mr-2" />
          <p className="font-semibold">
            MYPORTAL
            <br />
            SMAK YOS SUDARSO
          </p>
        </div>

        {keAdmin ? (
          <></>
        ) : (
          <div
            className={`flex flex-col items-center mb-8 ${
              keAdmin ? "hidden" : "flex"
            }`}
          >
            <img
              src={
                imagePath
                  ? `https://localhost:44364/${imagePath}`
                  : "/default.jpg"
              }
              className="w-[50%] h-auto rounded-full mb-3"
            />
            <h1 className="text-lg font-light">{name}</h1>
          </div>
        )}
        <nav className="flex flex-col gap-4 text-base w-[95%] ml-3">
          <NavLink
            to={keAdmin ? "/admin-dashboard" : "/user-dashboard"}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? "bg-[#BED8FF]/40" : "hover:bg-[#BED8FF]/40"
              }`
            }
          >
            <Icon
              icon="material-symbols:dashboard"
              className="w-[20px] h-[20px] mr-2"
            />
            Dashboard
          </NavLink>

          <NavLink
            to={keAdmin ? "/admin-student-data" : "/user-student-data"}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? "bg-[#BED8FF]/40" : "hover:bg-[#BED8FF]/40"
              }`
            }
          >
            <Icon icon="ph:student" className="w-[24px] h-[24px] mr-2" />
            Student Data
          </NavLink>

          <NavLink
            to={
              keAdmin ? "/admin-class-management" : "/user-class-and-schedule"
            }
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? "bg-[#BED8FF]/40" : "hover:bg-[#BED8FF]/40"
              }`
            }
          >
            {keAdmin ? (
              <Icon
                icon="solar:book-linear"
                className="w-[24px] h-[24px] mr-2"
              />
            ) : (
              <Icon
                icon="mdi:calendar-outline"
                className="w-[24px] h-[24px] mr-2"
              />
            )}
            {keAdmin ? "Class Management" : "Classes & Schedule"}
          </NavLink>

          <NavLink
            to={keAdmin ? "/admin-account-settings" : "/user-study-plan"}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? "bg-[#BED8FF]/40" : "hover:bg-[#BED8FF]/40"
              }`
            }
          >
            {keAdmin ? (
              <Icon icon="bi:gear-fill" className="w-[24px] h-[24px] mr-2" />
            ) : (
              <Icon
                icon="solar:book-linear"
                className="w-[24px] h-[24px] mr-2"
              />
            )}
            {keAdmin ? "Account Settings" : "Study Plan"}
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? "bg-[#BED8FF]/40" : "hover:bg-[#BED8FF]/40"
              }`
            }
            onClick={() => {
              logout();
              localStorage.removeItem("userRole");
            }}
          >
            <Icon
              icon="material-symbols:logout-rounded"
              className="w-[24px] h-[24px] mr-2"
            />
            Logout
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
