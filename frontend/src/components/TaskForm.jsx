import { useState } from "react"
import { useDispatch } from "react-redux";

function TaskForm() {
  const [ text, setText ] = useState("");
  const dispatch = useDispatch();
  
  const onSubmit = (e)=>{
    e.preventDefault();
    //dispatch(createTask({ text }));
    setText('');
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Task</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">Add Task</button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm;