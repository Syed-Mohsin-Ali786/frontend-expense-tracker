import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<MainPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
