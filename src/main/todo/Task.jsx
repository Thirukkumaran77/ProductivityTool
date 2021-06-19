import { useState } from "react";
import { FiDelete, FiCheckCircle } from "react-icons/fi";

const Task = ({
  onPop,
  task,
  setPomodoro,
  setId,
  taskOnPomodoro,
  onEndTask,
}) => {
  const [MySectionClass, setMySectionClass] = useState("section");
  const clockButton = () => {
    setPomodoro(task.name);
    setMySectionClass("section-pomodoro");
    setId(task.id);
  };
  return (
    <section key={task.id} className={MySectionClass}>
      <b>{task.name}</b>
      <div className="icons">
        {MySectionClass === "section" ? (
          <FiDelete className="ico" onClick={() => onPop(task.id)} />
        ) : (
          <FiDelete className="ico" onClick={() => onEndTask(task.id)} />
        )}
        {taskOnPomodoro ? null : (
          <FiCheckCircle className="ico" onClick={clockButton} />
        )}
      </div>
    </section>
  );
};

export default Task;
