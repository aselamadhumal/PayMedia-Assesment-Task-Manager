import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskColumn from "./TaskColumn";
import useTasks from "../hooks/useTasks";

const TaskBoard = () => {
  const { tasks, addNewTask, updateTaskStatus } = useTasks();

  const handleDrop = (task, status) => {
    updateTaskStatus(task.id, { ...task, status });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Task Dashboard</h1>
      <AddTaskForm onAdd={addNewTask} />
      <div className="flex gap-4">
        {["To Do", "In Progress", "Completed"].map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
