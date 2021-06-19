import { useState } from "react";
import Pomodoro from "./pomodoro/Pomodoro";
import Todo from "./todo/Todo";

const App = () => {
  const [component, setComponent] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [taskOnPomodoro, setTaskOnPomodoro] = useState(false);
  const [myClass, setMyClass] = useState("section");
  const onAdd = (task) => {
    setTasks([...tasks, task]);
  };
  const onPop = (pop) => {
    setTasks(tasks.filter((task) => task.id !== pop));
  };
  const setPomodoro = (name) => {
    setComponent(false);
    setName(name);
    setTaskOnPomodoro(true);
  };
  const onEndTask = () => {
    setComponent(true);
    onPop(id);
    setTaskOnPomodoro(false);
  };
  return (
    <>
      <div className="flex">
        <Todo
          tasks={tasks}
          onAdd={onAdd}
          onPop={onPop}
          setComponent={setComponent}
          component={component}
          setPomodoro={setPomodoro}
          myClass={myClass}
          setMyClass={setMyClass}
          setId={setId}
          taskOnPomodoro={taskOnPomodoro}
          onEndTask={onEndTask}
        />
        {component == false ? (
          <Pomodoro
            setComponent={setComponent}
            name={name}
            onEndTask={onEndTask}
          />
        ) : null}
      </div>
    </>
  );
};

export default App;
