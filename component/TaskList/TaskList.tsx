import React, { useState } from "react";
import { Tasks } from "../type";
import { BiCalendarEdit, BiCircle, BiTrash } from "react-icons/bi";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

const TaskList = (props: any) => {
  const [selectedId, setSelectedID] = useState<String>("");
  const [titleToUpdate, setTitleToUpdate] = useState<String>("");
  const [descToUpdate, setDescToUpdate] = useState<String>("");

  const handleDeleteTask = (id: String) => {
    const filteredItems = props.tasks.filter((item: Tasks) => item.id !== id);
    props.setTasks(filteredItems);
  };

  const handleCompleteTask = (id: String) => {
    const updatedItems = props.tasks.map((item: Tasks) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    props.setTasks(updatedItems);
  };

  const handlUpdateTask = () => {
    if (titleToUpdate !== "") {
      const updatedItems = props.tasks.map((item: Tasks) =>
        item.id === selectedId
          ? { ...item, title: titleToUpdate, description: descToUpdate }
          : item
      );
      props.setTasks(updatedItems);
      setSelectedID("");
    } else {
      alert("Please enter task title");
    }
  };

  const smoothingTheUpdateBox = (id: String, title: String, desc: String) => {
    setSelectedID(id);
    setTitleToUpdate(title);
    setDescToUpdate(desc);
  };

  return (
    <div className="task_list_container">
      <div className="task_bar_holder">
        {props.tasks.map((item: Tasks) => (
          <div>
            <div className="task_bar">
              <div className="colored_dot"></div>
              <div className="task_data_holder">
                <p className="todo_title">{item.title}</p>
                <p className="todo_desc">{item.description}</p>
              </div>
              <div className="iconsHolder">
                {item.completed ? (
                  <HiOutlineCheckCircle
                    onClick={() => handleCompleteTask(item.id)}
                    className="completed_checked"
                  />
                ) : (
                  <BiCircle
                    onClick={() => handleCompleteTask(item.id)}
                    className="complete_icon"
                  />
                )}
                <BiCalendarEdit
                  onClick={() =>
                    smoothingTheUpdateBox(item.id, item.title, item.description)
                  }
                  className="complete_icon"
                />
                <BiTrash
                  onClick={() => handleDeleteTask(item.id)}
                  className="complete_icon"
                />
              </div>
            </div>
            {item.id === selectedId && (
              <div className="editBox">
                <div className="heading_and_close">
                  <p className="update_task_heading">Update Task</p>
                  <div className="action_container">
                    <button className="submit_update" onClick={handlUpdateTask}>
                      Update
                    </button>
                    <HiOutlineXCircle
                      className="close_icon"
                      onClick={() => {
                        setDescToUpdate("");
                        setSelectedID("");
                        setTitleToUpdate("");
                      }}
                    />
                  </div>
                </div>
                <div className="update_field_holder">
                  <input
                    value={titleToUpdate.toString()}
                    placeholder={`Update title`}
                    className="update_title_field"
                    onChange={(e) => {
                      setTitleToUpdate(e.target.value);
                    }}
                  />
                  <input
                    value={descToUpdate.toString()}
                    placeholder={`Update description`}
                    className="update_desc_field"
                    onChange={(e) => {
                      setDescToUpdate(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
