import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./other/authContext";

// Others
import ScrollToTop from "@/other/scroll-to-top";
import AuthLayout from "@/page/auth-layout"; // layout for login and register pages
import BasicLayout from "@/page/basic-layout"; // layout for user and admin pages

// Login and Register Page
import Login from "@/page/login-register-page/login";
import Register from "@/page/login-register-page/register";

// User Page
import UserDashboard from "@/page/user-page/user-dashboard";
import UserStudentData from "@/page/user-page/user-student-data";
import UserClassAndSchedule from "@/page/user-page/user-class-and-schedule";
import UserStudyPlan from "@/page/user-page/user-study-plan";

// Admin Page
import AdminDashboard from "@/page/admin-page/admin-dashboard";
import AdminStudentData from "@/page/admin-page/admin-student-data";
import AdminClassManagement from "@/page/admin-page/admin-class-management";
import AdminAccountSettings from "@/page/admin-page/admin-account-settings";

// Admin Sub Pages
import AdminDashboardPendingDetails from "@/page/admin-page/admin-sub-pages/admin-dashboard-pending-details";
import AdminStudentDataDetails from "@/page/admin-page/admin-sub-pages/admin-student-data-details";
import AdminClassDetails from "./page/admin-page/admin-sub-pages/admin-class-details";



export default function App() {
  return (
    <>
     <AuthProvider>
        <Router>
          <ScrollToTop />
            <Routes>

              {/* Login and Register Page */}
              <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<BasicLayout />}>
                {/* User Page */}
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/user-student-data" element={<UserStudentData />} />
                <Route path="/user-class-and-schedule" element={<UserClassAndSchedule />} />
                <Route path="/user-study-plan" element={<UserStudyPlan />} />

                {/* Admin Page */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-student-data" element={<AdminStudentData />} />
                <Route path="/admin-class-management" element={<AdminClassManagement />} />
                <Route path="/admin-account-settings" element={<AdminAccountSettings />} />

                {/* Admin Sub Page */}
                <Route path="/admin-dashboard-pending-details" element={<AdminDashboardPendingDetails />} />
                <Route path="/admin-student-data-details" element={<AdminStudentDataDetails />} />
                <Route path="/admin-class-details" element={<AdminClassDetails />} />
              </Route>
              
            </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}