import React, { useState } from "react";

import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const listData = {
      name: enteredName,
      Date: new Date(enteredDate),
      text: enteredText,
      tag: enteredTag,
    };

    props.onSaveListData(listData);
    setEnteredName("");
    setEnteredDate("");
    setEnteredText("");
    setEnteredTag("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label>To do list name:</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={classes.control}>
          <label>Date</label>
          <input
            type="datetime-local"
            min="1980-01-01T00:00"
            max="2022-12-31T00:00"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label>Text Description</label>
          <textarea
            rows="5"
            type="text"
            value={enteredText}
            onChange={textChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label>Tag</label>
          <input type="text" value={enteredTag} onChange={tagChangeHandler} />
        </div>
      </div>
      <div className={classes.control}>
        <button type="submit">Add New Todolist</button>
      </div>
    </form>
  );
};

export default Form;
