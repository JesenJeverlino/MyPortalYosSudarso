import { createContext, useContext, useState, ReactNode } from 'react';

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);



interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
const [loginInfo, setLoginInfo] = useState<LoginInfo | null>(null);

  const login = (data:LoginInfo) => {
    setLoginInfo(data);
  };

  const logout = () => {
    setLoginInfo(null);
  };

  return (
    <AuthContext.Provider value={{ loginInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
