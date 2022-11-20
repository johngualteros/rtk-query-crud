import { useAddTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const completed = e.target.completed.checked;

    addTask({ title, description, completed });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="description" />
        <input type="checkbox" name="completed" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
