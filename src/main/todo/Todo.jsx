import Add from "./Add";
import List from "./List";

const Todo = ({
  tasks,
  onAdd,
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
      <div className="app">
        <div className="header">
          <div className="flex">
            <h2>todo</h2>
          </div>
          <br />
          <Add onAdd={onAdd} />
        </div>
        {tasks == 0 ? (
          <p className="grey">add something to make magic</p>
        ) : (
          <List
            tasks={tasks}
            onPop={onPop}
            setPomodoro={setPomodoro}
            myClass={myClass}
            setMyClass={setMyClass}
            setId={setId}
            taskOnPomodoro={taskOnPomodoro}
            onEndTask={onEndTask}
          />
        )}
      </div>
    </>
  );
};

export default Todo;
