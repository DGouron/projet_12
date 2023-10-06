
import { Route, Routes } from "react-router";
import Home from "./containers/home/Home";
import Dashboard from "./containers/dashboard/Dashboard";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
