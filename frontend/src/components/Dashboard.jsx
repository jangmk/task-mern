import { useEffect } from "react";
import { useSelector } from "react-redux"
import {useNavigate} from "react-router"
import TaskForm from "./TaskForm";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log("체킁: ",user);
    
  useEffect(()=>{
    if(!user) navigate("/login")
  },[user,navigate])
  
  return (
    <>
      <section>
        <h1>Welcome {user && user.name} </h1>
        <p>Tasks Dashboard</p>
      </section>
      <TaskForm />
    </>
  );
}

export default Dashboard;
