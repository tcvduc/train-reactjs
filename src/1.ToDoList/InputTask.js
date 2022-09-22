import React from "react";

const taskObject = {
  taskId: 0,
  taskName: "",
  taskDescription: "",
  taskStatus: false,
};

const classes = {
  displayNone: "displayNone",
  inputTaskName: "inputTaskName",
};

const InputTask = (props) => {
  const { addTaskProcess } = props;

  const [taskName, setTaskName] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");

  const handleInputTaskNameChange =
    /**
     *
     * @param {React.ChangeEvent} event
     */
    function (event) {
      const taskName = event.target.value;

      setTaskName(taskName);
    };

  const validateForm =
    /**
     *
     * @param {taskObject} taskData
     */
    function (taskData) {
      if (
        taskData.taskName.length === 0 ||
        taskData.taskDescription.length === 0
      ) {
        return false;
      }
      return true;
    };

  const handleButtonAddTaskOnclick =
    /**
     *
     * @param {React.MouseEvent} event
     */
    function (event) {
      const wasAllowToAdd = wasAllowToAddTask();

      if (wasAllowToAdd) {
        const taskData = {
          taskId: Math.floor(Math.random() * 1000),
          taskName: taskName,
          taskDescription: taskDescription,
          taskStatus: false,
        };

        // add task
        addTaskProcess(taskData);

        // refresh input
        setTaskName("");
        setTaskDescription("");
        document.getElementsByClassName(classes.inputTaskName)[0].focus();

        return;
      }
    };

  const wasAllowToAddTask = function () {
    const taskData = {
      taskId: Math.floor(Math.random() * 1000),
      taskName: taskName,
      taskDescription: taskDescription,
      taskStatus: false,
    };

    const layerValidateForm =
      document.getElementsByClassName("layerValidateForm")[0];

    const wasFormValid = validateForm(taskData);

    if (wasFormValid) {
      layerValidateForm.classList.add(classes.displayNone);

      return true;
    }

    if (!wasFormValid) {
      layerValidateForm.classList.remove(classes.displayNone);
      return false;
    }
  };

  const handleInputTaskOnkeydown =
    /**
     *
     * @param {React.KeyboardEvent} event
     */
    function (event) {
      const key = event.key;

      if (key === "Enter") {
        const wasAllowToAdd = wasAllowToAddTask();

        if (wasAllowToAdd) {
          const taskData = {
            taskId: Math.floor(Math.random() * 1000),
            taskName: taskName,
            taskDescription: taskDescription,
            taskStatus: false,
          };

          // add task
          addTaskProcess(taskData);

          // refresh input
          setTaskName("");
          setTaskDescription("");

          document.getElementsByClassName(classes.inputTaskName)[0].focus();

          return;
        }
      }
    };

  return (
    <div className="inputTask" onKeyDown={handleInputTaskOnkeydown}>
      <div className="layerTaskNameAndDescriptionAndButton">
        <div className="taskName">
          <label className="labelTaskName">Name</label>
          <input
            value={taskName}
            onChange={handleInputTaskNameChange}
            className="inputTaskName"
          />
        </div>
        <div className="taskDescription">
          <label className="labelTaskDescription">Description</label>
          <input
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
            className="inputTaskDescription"
          />
        </div>

        <div onClick={handleButtonAddTaskOnclick} className="buttonAddTask">
          Add Task
        </div>
      </div>

      <div className="layerValidateForm displayNone">
        <div className="validateValue error">Form Invalid</div>
      </div>
    </div>
  );
};

export default InputTask;
