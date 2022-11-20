import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return <div>
    {tasks.map(task => <div key={task.id}>
        <h4>{task.title}</h4>
        <h6>{task.description}</h6>
        <input type="checkbox" checked={task.completed} id={task.id} onChange={e => updateTask({
          ...task,
          completed: e.target.checked
        })}/>
        <label htmlFor={task.id}>{task.completed ? 'Completed' : 'Not Completed'}</label>
        <button onClick={()=> deleteTask(task.id)}>Delete</button>
    </div>)}
  </div>;
};

export default TaskList;
