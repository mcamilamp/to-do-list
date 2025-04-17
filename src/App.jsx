import React, { useRef, useState } from "react";
import "./App.css";
import { FcTodoList } from "react-icons/fc";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { list } from "postcss";
import { MdRemoveDone } from "react-icons/md";
import { motion } from "framer-motion";

function App() {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editItemId, setEditItemId] = useState(0);
  let menu = useRef();
  const [option, setOption] = useState("All");

  const addToDoList = () => {
    let newItem = {
      id: uuidv4(),
      item: value,
      status: "Active",
    };
    if (value) {
      setToDoList((list) => [...list, newItem]);
    }
    setValue("");
  };

  const editList = (val) => {
    setValue(val.item);
    setEditItemId(val.id);
  };

  const updateList = () => {
    setToDoList((list) =>
      list.map((item) =>
        item.id === editItemId ? { ...item, item: value } : item
      )
    );

    setValue("");
    setEditItemId(0);
  };

  const removeFromList = (id) => {
    setToDoList((list) => list.filter((item) => item.id !== id));
    setValue("");
    setEditItemId(0);
  };

  const stateChange = (id) => {
    let status =
      toDoList.filter((item) => item.id === id)[0].status === "Active"
        ? "Resolved"
        : "Active";

    setToDoList((list) =>
      list.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-[3rem] flex flex-col items-center">
        <FcTodoList className="text-[3rem]" />
        <h3 className="font-semibold">Create your task list</h3>
      </div>
      <div className="flex justify-between w-[380px] mb-4">
        <h2>
          Remaining Task:{" "}
          {toDoList.filter((item) => item.status === "Active").length}
        </h2>
        <select
          className="outline-none"
          onClick={() => setOption(menu.current.value)}
          ref={(input) => (menu.current = input)}
          name=""
          id=""
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          className="border border-1 outline-none w-[380px] h-[2rem] p-1"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => (editItemId !== 0 ? updateList() : addToDoList())}
          className="bg-[#737373] h-[2rem] w-[5rem] text-white"
        >
          {editItemId !== 0 ? "Edit" : "Add"}
        </button>
      </div>
      <div>
        <div>
          <ul>
            {toDoList.map((list) => (
              <>
                {(list.status === option || option === "All") && (
                  <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring" }}
                    key={list.id}
                    className={`flex items-center mb-2 p-1 w-[380px] justify-between border-b rounded-md p-1 ${
                      list.status === "Resolved" ? "bg-green-400" : ""
                    }`}
                  >
                    <p>{list.item}</p>
                    <span className="flex w-[80px] justify-between items-center">
                      <MdEdit
                        onClick={() => editList(list)}
                        className="text-[20px] cursor-pointer"
                      />
                      <FaTrash
                        onClick={() => removeFromList(list.id)}
                        className="text-[20px] cursor-pointer"
                      />

                      {list.status === "Active" && (
                        <MdDone
                          onClick={() => stateChange(list.id)}
                          className="text-[25px] cursor-pointer"
                        />
                      )}
                      {list.status === "Resolved" && (
                        <MdRemoveDone
                          onClick={() => stateChange(list.id)}
                          className="text-[25px] cursor-pointer"
                        />
                      )}
                    </span>
                  </motion.li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
