import React, { useState } from "react";
import TaskList from "./TaskList";

interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

const Form = () => {
  const [task, setTask] = useState({
    id: 0,
    name: "",
    description: "",
    completed: false,
  });
  const [taskList, setTaskList] = useState<Task[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (!task.name.trim() || !task.description.trim()) {
      return;
    }

    if (task.id) {
      // Update existing task
      const updatedTaskList = taskList.map((t) =>
        t.id === task.id ? { ...task } : t
      );
      setTaskList(updatedTaskList);
    } else {
      // Create new task
      const newTask: Task = { ...task, id: Date.now() };
      setTaskList([...taskList, newTask]);
    }

    setTask({ id: 0, name: "", description: "", completed: false });
  };

  const handleTaskDelete = (id: number) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleTaskEdit = (id: number) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    if (taskToEdit) {
      setTask(taskToEdit);
      const updatedTaskList = taskList.map((task) =>
        task.id === id ? taskToEdit : task
      );
      setTaskList(updatedTaskList);
    }
  };

  const handleTaskCheck = (id: number) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Task</h1>
      </div>

      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Name"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              name="name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="sr-only">
            Description
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Description"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              name="description"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            {task.id ? "Update" : "Create"}
          </button>
        </div>
      </form>
      <TaskList
        tasks={taskList}
        onTaskDelete={handleTaskDelete}
        onTaskEdit={handleTaskEdit}
        onTaskCheck={handleTaskCheck}
      />
    </div>
  );
};

export default Form;
