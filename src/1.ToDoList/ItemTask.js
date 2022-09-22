import React from "react";

const ItemTask = (props) => {
  const {
    taskId,
    taskName,
    taskDescription,
    taskStatus,
    deleteTaskProcess,
    updateTaskProcess,
  } = props;

  const handleButtonDeleteOnclick = function () {
    deleteTaskProcess(taskId);
  };

  const handleWorkingOnclick = function () {
    const toggleTaskStatus = {
      taskId: taskId,
      taskName: taskName,
      taskDescription: taskDescription,
      taskStatus: !taskStatus,
    };

    updateTaskProcess(toggleTaskStatus);
  };

  return (
    <div className="itemTask">
      <div className="layerItemTaskNameAndDescription">
        <div className="itemTaskName">{taskName}</div>
        <div className="itemTaskDescription">{taskDescription}</div>
      </div>
      <div className="layerTaskStatusAndDeleteButton">
        {taskStatus === true ? (
          <div
            onClick={handleWorkingOnclick}
            className="buttonStatus completed"
          >
            Completed
          </div>
        ) : (
          <div onClick={handleWorkingOnclick} className="buttonStatus working">
            Working
          </div>
        )}

        <div onClick={handleButtonDeleteOnclick} className="buttonDelete">
          Delete
        </div>
      </div>
    </div>
  );
};

export default ItemTask;
