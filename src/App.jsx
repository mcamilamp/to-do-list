import "./App.css";
import { FcTodoList } from "react-icons/fc";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-[3rem] flex flex-col items-center">
        <FcTodoList className="text-[3rem]" />
        <h3 className="font-semibold">Create your task list</h3>
      </div>
      <div className="flex justify-between w-[380px] mb-4">
        <h2>Remaining Task: 0</h2>
        <select className="outline-none" name="" id="">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          className="border border-1 outline-none w-[380px] h-[2rem] p-1"
          type="text"
        />
        <button className="bg-[#737373] h-[2rem] w-[5rem] text-white">
          Add
        </button>
      </div>
      <div>
        <div>
          <ul>
            <li className="flex items-center mb-2 p-1 w-[380px] justify-between border-b rounded-md p-1">
              <p>Apple</p>
              <span className="flex w-[80px] justify-between items-center">
                <MdEdit className="text-[20px] cursor-pointer" />
                <FaTrash className="text-[20px] cursor-pointer" />
                <MdDone className="text-[25px] cursor-pointer" />
              </span>
            </li>

            <li className="flex items-center mb-2 p-1 w-[380px] justify-between border-b rounded-md p-1">
              <p>Apple</p>
              <span className="flex w-[80px] justify-between items-center">
                <MdEdit className="text-[20px] cursor-pointer" />
                <FaTrash className="text-[20px] cursor-pointer" />
                <MdDone className="text-[25px] cursor-pointer" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
