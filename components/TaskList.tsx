interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskDelete: (index: number) => void;
  onTaskEdit: (index: number) => void;
  onTaskCheck: (index: number) => void;
}
const TaskList = ({
  tasks,
  onTaskDelete,
  onTaskEdit,
  onTaskCheck,
}: TaskListProps) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6 overflow-y-auto ">
            {tasks.length > 0 && (
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left"></th>
                    <th className="py-3 px-6 text-left sm:text-sm sm:px-2">
                      Name
                    </th>
                    <th className="py-3 px-6 text-center sm:text-sm sm:px-2">
                      Description
                    </th>
                    <th className="py-3 px-6 text-center sm:text-sm sm:px-2">
                      Status
                    </th>
                    <th className="py-3 px-6 text-center sm:text-sm sm:px-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {tasks.map((task: Task, index: number) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <input
                              type="checkbox"
                              onChange={() => onTaskCheck(task.id)}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <p>{task.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <p>{task.description}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {task.completed ? (
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                            Completed
                          </span>
                        ) : (
                          <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                            Incomplete
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div
                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            onClick={() => onTaskEdit(task.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div
                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            onClick={() => onTaskDelete(task.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
