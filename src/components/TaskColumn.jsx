import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const TaskColumn = ({ status, tasks, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => onDrop(item, status),
  }));

  return (
    <div ref={drop} className="flex-1 p-4 bg-gray-100 rounded">
      <h2 className="mb-4 text-lg font-bold">{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
