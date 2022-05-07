import React from "react";

import Form from "./Form";
import "./NewList.css";

const NewList = (props) => {
  const saveListDataHandler = (enteredListData) => {
    const listData = {
      ...enteredListData,
      id: new Date().getTime(),
      done: false,
      checktime: new Date(),
    };
    console.log(listData);
    props.onAddList(listData);
  };
  return (
    <div className="new-list">
      <Form onSaveListData={saveListDataHandler} />
    </div>
  );
};

export default NewList;
