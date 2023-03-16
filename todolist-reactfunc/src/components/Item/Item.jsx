import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Item = ({ item ,editItem}) => {
  let Items = [
    {
      id: "abc1",
      name: "Học Javascript Cơ bản",
      level: "Medium", // medium
    },
    {
      id: "abc2",
      name: "Học HTML Cơ Bản",
      level: "Low", // low
    },
    {
      id: "abc3",
      name: "Học CSS Cơ Bản",
      level: "Low", // low
    },
    {
      id: "abc4",
      name: "Học ReactJS Cơ Bản",
      level: "Medium", // medium
    },
    {
      id: "abc5",
      name: "Học Typescript Cơ Bản",
      level: "Medium", // medium
    },
    {
      id: "abc6",
      name: "Học React.Hook",
      level: "High", // high
    },
  ];
  //thêm item mới vào danh sách.
  const [listItem, setListItem] = useState(Items);
  useEffect(()=>{
    setListItem([...Items,...item])
  },[item])

  //remove item
  const handleRemoveItem = (id) => {
    setListItem((newList) => newList.filter((item) => item.id !== id));
  };

  //edit item
  const navigate=useNavigate();
  const handleditItem=(id)=>{
    const editItem=Items.find(item=>item.id===id)
    navigate("/editItem",{state:editItem})
    console.log(editItem);
  }

  // LỖI
  useEffect(()=>{
    console.log("item:",editItem);
    const id=Items.findIndex(item=>item.id===editItem.id);
    console.log(id);
  },[])

  return listItem.map((item, index) => {
    return (
      <tr key={index}>
        <td className="text-center">{item.id}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span className="label label-danger">{item.level}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm" 
          onClick={()=>handleditItem(item.id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm ml-1"
            onClick={() => handleRemoveItem(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};
export default Item;
