import {BrowserRouter as Route, Routes } from "react-router";
import "./App.css";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
    </>
  );
}

export default App;
