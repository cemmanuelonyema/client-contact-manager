import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Contacts, Landing, Login, Signup } from "./components/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
