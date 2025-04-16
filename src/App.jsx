import "./App.css";
import { FcTodoList } from "react-icons/fc";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-[3rem] flex flex-col items-center">
        <FcTodoList className="text-[3rem]" />
        <h3 className="font-semibold">Create your task list</h3>
      </div>
      <div>
        <h2>Remaining Task: 0</h2>
        <select name="" id="">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
    </div>
  );
}

export default App;
