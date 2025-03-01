import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import TaskList from "./components/TaskList";
//import "react-toastify/dist/ReactToastify.css"; // 필요없음

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/alltasks" element={<TaskList />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
