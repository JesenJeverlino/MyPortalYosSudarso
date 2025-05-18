import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/other-component/button";
import { auth_login } from "@/services/auth";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoginCardRight() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

      try {
        const res = await auth_login({ email, password });
        localStorage.setItem('loginInfo', JSON.stringify(res.data));
      toast.success(res.message || "Login successful!", {
        onClose: () => {
          if (res.data.role === "Admin") {
            navigate("/admin-dashboard");
          } else if (res.data.role === "Student") {
            navigate("/user-dashboard");
          }
        },
        autoClose: 300,
      });
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex-2 flex flex-col bg-white/80 md:rounded-tr-[20px] md:rounded-br-[20px]">
        <p className="font-bold text-[#1952a6] mt-10 mb-6 text-center 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
          Welcome to MyPortal
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-around flex-1"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="px-5 w-[70%] mb-[10px] mx-[10px] rounded-[5px] border-2 
            border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[80px] lg:h-[70px] md:h-[65px] h-[50px]"
          />
          <div className="relative w-[70%] mb-[10px] mx-[10px]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-5 w-full rounded-[5px] border-2 
            border-[#a6a6a6] bg-[#e8e8e8] placeholder:text-[#a6a6a6] placeholder:font-[inter] placeholder:text-[1rem] 2xl:h-[80px] lg:h-[70px] md:h-[65px] h-[50px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a6a6a6] hover:text-[#1952a6]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Button
            variant="round-blue"
            disabled={loading}
            type="submit"
            value="LOGIN"
          />
        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={1000}
      />
    </>
  );
}
