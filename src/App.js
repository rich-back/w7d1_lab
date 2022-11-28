import "./App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority: "low" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.priority === "high" ? "high" : "low"}>
        <span>{task.name}</span>
      </li>
    );
  });

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleRadioChange = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    //prevent the default
    event.preventDefault();
    //clone the items array
    const newTasksArr = [...tasks];
    //push on a new object to the cloned array
    newTasksArr.push({name: newTask, priority: newPriority});
    //set the items state
    setTasks(newTasksArr);
    console.log(event)
    //reset the newItem
    setNewTask("");
  }


  return (
    <div className="app">
      <h1>ToDo's</h1>

      <form onSubmit={saveNewTask}>
        <input
          type="text"
          id="new-task"
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <label id="High" htmlFor="High">High</label>
        <input type="radio" name="Priority" value="high" onChange={handleRadioChange}></input>
        <label id="Low" htmlFor="Low">Low</label>
        <input  type="radio" name="Priority" value="low" onChange={handleRadioChange}></input>
        <input type="Submit" value="Save Task"></input>
      </form>

      <ul>{taskNodes}</ul>
    </div>
  );
}

export default App;
