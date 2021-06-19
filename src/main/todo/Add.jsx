import { useState } from "react";

const Add = ({ onAdd }) => {
  const [name, setName] = useState("");
  const id = Math.floor(Math.random() * 10000) + 11;
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name: name, id: id });
    setName("");
  };
  return (
    <>
      <form className="fc" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="inp"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button className="btn-half" disabled={name === "" ? true : false}>
          add
        </button>
      </form>
      <br />
    </>
  );
};

export default Add;
