import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import Form from "./components/Form/Form";
import ListItem from "./components/ListItem/ListItem";
import ItemEdit from "./components/Item Edit/ItemEdit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // tạo state để nhận lại giá trị item.
  const [item, setItem] = useState([]);

  //edit item
  const [editItem, setEditItem] = useState({});
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
        </Routes>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Routes>
              <Route path="/" element={<Search />} />
            </Routes>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Routes>
              <Route path="/" element={<Sort />} />
            </Routes>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <div className="row marginB10">
              <button
                type="button"
                className="btn btn-info btn-block marginB10"
              >
                Add Item
              </button>
              <Routes>
                <Route
                  path="/"
                  element={<Form item={item} setItem={setItem} />}
                />
              </Routes>
            </div>
          </div>
        </div>
        <ListItem item={item} editItem={editItem}/>
        <Routes>
          <Route path="/editItem" element={<ItemEdit editItem={editItem} setEditItem={setEditItem} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
