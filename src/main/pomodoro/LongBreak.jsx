import { useEffect, useState } from "react";
const Break = ({ setTimer }) => {
  const final = 1000 * 60 * 15;
  const [time, setTime] = useState(final);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let interval = null;
    if (status) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } else if (!status) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status]);
  if (time === 0) {
    alert("break time is over... work starts ");
    setTimer(true);
  }
  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  return (
    <>
      <div className="time">
        <h2>{min}</h2>
        <p>min</p>
      </div>
      <div className="time">
        <h2>{sec}</h2>
        <p>sec</p>
      </div>
      <br />
      {status && <button onClick={() => setStatus(false)}>Pause</button>}
      {!status && time > 0 && (
        <button onClick={() => setStatus(true)}>start</button>
      )}
      {!status && time !== final && (
        <button onClick={() => setTime(final)}>Reset</button>
      )}
    </>
  );
};

export default Break;
