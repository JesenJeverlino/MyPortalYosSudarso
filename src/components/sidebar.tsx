import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";

export default function Sidebar() {
  return (
    <>
      <aside className="w-68 bg-[#1952a6] text-white flex flex-col p-2">
        <div className="flex mb-12 p-2">
          <img src="logo-yos-sudarso.jpeg" className="w-[40px] h-auto mr-2" />
          <h1 className="font-semibold">
            MYPORTAL <br></br> SMAK YOS SUDARSO
          </h1>
        </div>
        <div className="flex flex-col items-center mb-8">
          <img
            src="pp-draft.jpg"
            className="w-[50%] h-auto rounded-full mb-3"
          />
          <h1 className="text-lg font-light">John Doe</h1>
        </div>
        <nav className="flex flex-col gap-4 text-base w-[95%] ml-3">
          <NavLink
            to="/user-dashboard"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? 'bg-[#BED8FF]/40' : 'hover:bg-[#BED8FF]/40'
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
            to="/user-student-data"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? 'bg-[#BED8FF]/40' : 'hover:bg-[#BED8FF]/40'
              }`
            }
          >
            <Icon icon="ph:student" className="w-[24px] h-[24px] mr-2" />
            Student Data
          </NavLink>
          <NavLink
            to="/user-class-and-schedule"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? 'bg-[#BED8FF]/40' : 'hover:bg-[#BED8FF]/40'
              }`
            }
          >
            <Icon
              icon="mdi:calendar-outline"
              className="w-[24px] h-[24px] mr-2"
            />
            Classes & Schedule
          </NavLink>
          <NavLink
            to="/user-study-plan"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? 'bg-[#BED8FF]/40' : 'hover:bg-[#BED8FF]/40'
              }`
            }
          >
            <Icon icon="solar:book-linear" className="w-[24px] h-[24px] mr-2" />
            Study Plan
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg text-white ${
                isActive ? 'bg-[#BED8FF]/40' : 'hover:bg-[#BED8FF]/40'
              }`
            }
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
