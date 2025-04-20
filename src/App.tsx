import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/page/login";
import Register from "@/page/register";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
