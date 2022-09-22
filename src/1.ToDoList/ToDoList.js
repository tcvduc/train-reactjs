import "./style.css";
import InputTask from "./InputTask";
import ListTask from "./ListTask";
import ItemTask from "./ItemTask";
import React from "react";

/**
 *
 * @param {number} n
 */
function generateTaskData(n) {
  const ret = [];

  for (let i = n; i >= 1; --i) {
    let task = {
      taskId: i,
      taskName: `task ${i}`,
      taskDescription: `description ${i}`,
      taskStatus: Math.random() >= 0.5,
    };

    ret.push(task);
  }

  return ret;
}

function updateLocalStorageTaskData(taskData) {
  window.localStorage.setItem("taskData", JSON.stringify(taskData));
}

const ToDoList = () => {
  const [tasks, setTasks] = React.useState([]);

  const addTaskProcess = function (task) {
    console.log(task);
    const newTaskData = [task, ...tasks];
    setTasks(newTaskData);

    updateLocalStorageTaskData(newTaskData);
  };

  const deleteTaskProcess = function (taskId) {
    const newTaskData = tasks.filter(function (task) {
      return task.taskId !== taskId;
    });

    setTasks(newTaskData);

    // update local storage task data
    updateLocalStorageTaskData(newTaskData);
  };

  const updateTaskProcess = function (task) {
    console.log(task);
    let newTaskData = [...tasks];

    for (let i = newTaskData.length - 1; i >= 0; --i) {
      if (newTaskData[i].taskId === task.taskId) {
        newTaskData[i] = task;
      }
    }

    // set new task data
    setTasks(newTaskData);

    // update local storage task data
    updateLocalStorageTaskData(newTaskData);
  };

  React.useEffect(function () {
    // save data to local storage to close browser it still exist

    const taskDataJSON = window.localStorage.getItem("taskData");
    const taskData = JSON.parse(taskDataJSON);

    if (taskData) {
      setTasks(taskData);
    }
  }, []);

  return (
    <div className="layer">
      <div className="title">To Do List</div>
      <div className="layerInputTaskAndListTask">
        <InputTask addTaskProcess={addTaskProcess} />

        <ListTask>
          {tasks.map(function (task, index) {
            return (
              <ItemTask
                updateTaskProcess={updateTaskProcess}
                deleteTaskProcess={deleteTaskProcess}
                {...task}
                key={index}
              />
            );
          })}
        </ListTask>
      </div>
    </div>
  );
};

export default ToDoList;
