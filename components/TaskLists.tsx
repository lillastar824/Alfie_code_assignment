// interface Task {
//   id: number;
//   name: string;
//   description: string;
// }

// interface TaskListProps {
//   tasks: Task[];
//   onTaskDelete: (index: number) => void;
//   onTaskEdit: (index: number) => void;
//   onTaskCheck: (index: number) => void;
// }

// const TaskList = ({
//   tasks,
//   onTaskDelete,
//   onTaskEdit,
//   onTaskCheck,
// }: TaskListProps) => {
//   return (
//     <div className="mt-5">
//       <h1 className="font-semibold text-2xl ">Task List</h1>
//       <div className="">
//         {tasks.map((task: Task, index: number) => (
//           <div key={index} className="mt-6">
//             <div className="flex gap-4 m-2">
//               <input type="checkbox" onChange={() => onTaskCheck(task.id)} />
//               <p>
//                 <span className="text-lg font-medium">Name:</span>
//                 {task.name}
//               </p>
//               <p>
//                 <span className="text-lg font-medium">Description:</span>
//                 {task.description}
//               </p>
//             </div>
//             <div className="flex flex-row gap-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
//                 onClick={() => onTaskEdit(task.id)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
//                 onClick={() => onTaskDelete(task.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskList;
