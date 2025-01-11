import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskBoard from "./components/TaskBoard";
import "./index.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskBoard />
    </DndProvider>
  );
};

export default App;
