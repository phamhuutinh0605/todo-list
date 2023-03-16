import React from 'react'
import Item from '../Item/Item';
const ListItem = ({item,editItem}) => {
  return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Name</th>
              <th style={{ width: "15%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <Item item={item} editItem={editItem}/> 
            {/* nhận lại item mới được thêm vào từ form và truyền lại cho item */}
          </tbody>
        </table>
      </div>
    );
}

export default ListItem
