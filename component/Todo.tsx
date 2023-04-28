import React, { useState } from "react";
import TaskCreator from "./TaskCreator/TaskCreator";
import { Tasks } from "./type";
import TaskList from "./TaskList/TaskList";

const Todo = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  console.log(tasks);
  return (
    <div className="todo_container">
      <div className="todo_component_holder">
        {/* <div className="sidebar_holder"></div> */}
        <div className="tasklist_holder">
          <TaskCreator setTasks={setTasks} tasks={tasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
