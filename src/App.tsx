import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "@/page/login"
import Register from "@/page/register"

// User Page
import UserDashboard from "@/page/user-page/user-dashboard"
import UserStudentData from "@/page/user-page/user-student-data"
import UserClassAndSchedule from "@/page/user-page/user-class-and-schedule"
import UserStudyPlan from "@/page/user-page/user-study-plan"

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
        </Routes>
      </Router>
    </>
  );
}
