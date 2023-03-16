import React, { useRef, useState } from "react";
const Form = ({ item, setItem }) => {
  const [name, setName] = useState("");
  const level = useRef("Low");

  const handleAddItem = () => {
   
    setItem([
      ...item,
      {
        id: "abc" + Math.floor(Math.random() * 100),
        name,
        level:level.current,
      },
    ]);
    console.log(level.current);
  };
  return (
    <form className="form-inline pt-1">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group ml-1">
        <select
          className="form-control"
          onChange={(e) => (level.current = e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary ml-1"
        onClick={handleAddItem}
      >
        Submit
      </button>
      <button type="button" className="btn btn-danger ml-1">
        Cancel
      </button>
    </form>
  );
};

export default Form;
