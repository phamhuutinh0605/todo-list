import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ItemEdit = ({editItem, setEditItem}) => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [name, setName] = useState(location.state.name);
  const [level, setLevel] = useState(location.state.level);

  const navigate=useNavigate();
  //edit item
  const handleEdit = () => {
     setEditItem({
      id,
      name,
      level,
    });
  };

  //cancel edit
  // const handleCancel=()=>{
  //   navigate("/",)
  // }
  return (
    <tr>
      <td className="text-center">{id}</td>
      <td>
        <input
          type="text"
          className="form-control"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td className="text-center">
        <select
          className="form-control"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </td>
      <td>
        <button type="button" className="btn btn-default btn-sm">
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={handleEdit}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default ItemEdit;
