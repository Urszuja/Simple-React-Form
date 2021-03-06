const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 key={task.id}>
        {task.text}
        <span style={{ color: "red" }} onClick={() => onDelete(task.id)}>
          X
        </span>
      </h3>
      <p> {task.day}</p>
    </div>
  );
};

export default Task;
