import React, { useState } from "react";
import { Tasks } from "../type";
import { HiPlusCircle } from "react-icons/hi2";
import { generateRandomString } from "../../utils/uuid";

const TaskCreator = (props: any) => {
  const [task, setTask] = useState<Tasks>({
    id: generateRandomString(8),
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (e: any, stateName: any) => {
    const { name, value } = e.target;
    stateName((prevState: Tasks) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddtask = () => {
    if (task.title !== "" && task.description !== "") {
      props.setTasks([...props.tasks, task]);
      setTask({
        id: generateRandomString(8),
        title: "",
        description: "",
        completed: false,
      });
    } else {
      alert("Please input tasks");
    }
  };

  return (
    <div>
      <div className="task_creator_heading_holder">
        <p className="task_creator_heading">Today main focus</p>
      </div>
      <div className="filed_btn_holder">
        <input
          value={task.title.toString()}
          type="text"
          name="title"
          placeholder="Add Task title"
          className="task_title_field"
          onChange={(e) => {
            handleChange(e, setTask);
          }}
          required
        />
        <input
          value={task.description.toString()}
          name="description"
          placeholder="Description..."
          onChange={(e) => {
            handleChange(e, setTask);
          }}
          className="task_desc_field"
          required
        />
        <div>
          <HiPlusCircle onClick={handleAddtask} className="addIcon" />
        </div>
      </div>
    </div>
  );
};

export default TaskCreator;
