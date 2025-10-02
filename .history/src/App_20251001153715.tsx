import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <ProtectedRoute>
          <Route path="/" element={<MainPage />} />
        </ProtectedRoute>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
