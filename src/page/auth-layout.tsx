import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[url('/morphism-bg-image.jpg')] bg-cover">
        <Outlet />
      </div>
    </>
  );
}