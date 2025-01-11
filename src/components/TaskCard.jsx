import React from "react";
import { useDrag } from "react-dnd";

const TaskCard = ({ task }) => {
  const [, drag] = useDrag(() => ({
    type: "task",
    item: task,
  }));

  return (
    <div
      ref={drag}
      className="p-4 mb-2 bg-white rounded shadow-md hover:shadow-lg cursor-pointer"
    >
      <h4 className="font-bold">{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
