import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "@/page/login"
import Register from "@/page/register"

// User Page
import UserDashboard from "@/page/user-page/user-dashboard"
import UserStudentData from "@/page/user-page/user-student-data"
import UserClassAndSchedule from "@/page/user-page/user-class-and-schedule"
import UserStudyPlan from "@/page/user-page/user-study-plan"

// Admin Page
import AdminDashboard from "./page/admin-page/admin-dashboard"
import AdminStudentData from "./page/admin-page/admin-student-data"
import AdminClassManagement from "./page/admin-page/admin-class-management"
import AdminAccountSettings from "./page/admin-page/admin-account-settings"

import AdminDashboardApproveDetails from "./page/admin-page/admin-dashboard-approve-details"
import AdminStudentDataDetail from "@/page/admin-page/admin-student-data-detail"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user-student-data" element={<UserStudentData />} />
          <Route path="/user-class-and-schedule" element={<UserClassAndSchedule />} />
          <Route path="/user-study-plan" element={<UserStudyPlan />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-student-data" element={<AdminStudentData />} />
          <Route path="/admin-class-management" element={<AdminClassManagement />} />
          <Route path="/admin-account-settings" element={<AdminAccountSettings />} />

          <Route path="/admin-dashboard-approve-details" element={<AdminDashboardApproveDetails />} />
          <Route path="/admin-student-data-detail" element={<AdminStudentDataDetail />} />
        </Routes>
      </Router>
    </>
  );
}