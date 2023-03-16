import React, { useState } from "react";


const Sort = () => {
  
  const [options,setOptions]=useState("Name - ASC");
  const handleChoose=()=>{
      setOptions({
      })
  }
  return (
    <div className="dropdown">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
        // onClick={handleChoose}
      >
        Sort by 
      </button>
      <ul className="dropdown-menu" onChange={e=>(options.current==e.target.value)}>
          <li>
            <a role="button" value="Name-ASC">Name - ASC</a>
          </li>
          <li>
            <a role="button" value="Name-DESC">Name - DESC</a>
          </li>
          <li>
            <a role="button" value="Level-ASC">Level - ASC</a>
          </li>
          <li>
            <a role="button" value="Level-DESC">Level - DESC</a>
          </li>
      </ul>
      <span className="label label-success label-medium btn btn-success">
        {options}
      </span>
    </div>
  );
};

export default Sort;
