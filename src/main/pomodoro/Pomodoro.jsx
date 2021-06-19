import { useState } from "react";
import Break from "./Break";
import LongWork from "./LongWork";
import LongBreak from "./LongBreak";
import Work from "./Work";

const Pomodoro = ({ name, setComponent, onEndTask }) => {
  const [timerMode, setTimerMode] = useState(true);
  const [timer, setTimer] = useState(true);
  const short = timer ? (
    <Work setTimer={setTimer} />
  ) : (
    <Break setTimer={setTimer} />
  );
  const long = timer ? (
    <LongWork setTimer={setTimer} />
  ) : (
    <LongBreak setTimer={setTimer} />
  );
  return (
    <div className="app">
      <div className="flex">
        <h2>pomodoro</h2>
      </div>
      <h3 style={{ marginTop: "2rem" }}>{name}</h3>
      {timerMode ? short : long}
      {timer ? (
        <button onClick={() => setTimer(false)}>set break timer</button>
      ) : (
        <button onClick={() => setTimer(true)}>set work timer</button>
      )}
      <button onClick={() => setTimerMode(!timerMode)}>change mode</button>
      {name === "" ? null : <button onClick={onEndTask}>end task</button>}
    </div>
  );
};

export default Pomodoro;
