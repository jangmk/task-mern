import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"

function TaskItem({ task }) {
  const dispatch = useDispatch()
  const {_id} = useSelector((state)=> state.task)
  return (
    <div className="task">
      <div>
        { new Date(task.createdAt).toLocaleString('ko-KR')}
      </div>
      <h2>{task.text}</h2>
      <button className="close" onClick={()=>dispatch(deleteTask(task._id))}>X</button>
    </div>
  )
}

export default TaskItem