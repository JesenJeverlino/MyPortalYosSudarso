import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";
import { userStudentData_getStudentDetails } from "@/services/userStudentDataAPI";

interface LoginInfo {
  userId: number;
  email: string;
  password: string;
  fullname: string;
  role: string;
  nisn: string;
  imagePath: string;
  grade: number;
}

interface AuthContextType {
  loginInfo: LoginInfo | null;
  login: (data: LoginInfo) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const login = (data: LoginInfo) => {
    setLoginInfo(data);
  };

  const logout = () => {
    setLoginInfo(null);
    localStorage.removeItem("userDataLocal");
  };

useEffect(() => {
  const restoreLoginInfo = async () => {
    setLoading(true);
    const stored = localStorage.getItem("userDataLocal");
    if (!loginInfo && stored) {
      const { nisn, role, userId, fullname, password, email } = JSON.parse(stored);

      if (role === "Student") {
        try {
          const data = await userStudentData_getStudentDetails(nisn);
          setLoginInfo({
            userId: data.userId,
            email: data.email,
            fullname: data.fullname,
            password: data.password,
            role: "Student",
            nisn: data.nisn,
            imagePath: data.imagePath,
            grade: data.grade,
          });
        } catch (err) {
          console.error("Gagal mengambil data student:", err);
          localStorage.removeItem("userRole");
        } finally {
          setLoading(false);
        }
      } else if (role === "Admin") {
        setLoginInfo({
          userId,
          role,
          fullname,
          password,
          email,
          nisn: "",
          imagePath: "",
          grade: 0,
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  restoreLoginInfo();
}, []);


  return (
    <AuthContext.Provider value={{ loginInfo, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
