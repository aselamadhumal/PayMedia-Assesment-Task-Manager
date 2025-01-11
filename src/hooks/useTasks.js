import { useState, useEffect } from "react";
import { getTasks, addTask, updateTask } from "../api/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addNewTask = async (task) => {
    const newTask = await addTask(task);
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTaskStatus = async (id, updates) => {
    const updatedTask = await updateTask(id, updates);
    setTasks((prev) => prev.map((task) => (task.id === id ? updatedTask : task)));
  };

  return { tasks, addNewTask, updateTaskStatus };
};

export default useTasks;
