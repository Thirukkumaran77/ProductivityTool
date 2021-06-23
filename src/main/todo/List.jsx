import Task from "./Task";
const List = ({
  tasks,
  onPop,
  setPomodoro,
  myClass,
  setMyClass,
  setId,
  taskOnPomodoro,
  onEndTask,
}) => {
  return (
    <>
      <div className="scroll">
        {tasks
          .map((task) => (
            <Task
              key={task.id}
              onPop={onPop}
              task={task}
              setPomodoro={setPomodoro}
              myClass={myClass}
              setMyClass={setMyClass}
              setId={setId}
              taskOnPomodoro={taskOnPomodoro}
              onEndTask={onEndTask}
            />
          ))
          .reverse()}
      </div>
    </>
  );
};

export default List;
