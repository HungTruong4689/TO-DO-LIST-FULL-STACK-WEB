import React, { useState } from "react";
import ListDate from "./ListDate.js";
import Alarmtime from "./Alarmtime.js";
import "./DoList.css";

const DoList = (props) => {
  // console.log(props.id);
  const [Active, setClass] = useState(props.done);
  //const [isActive, setIsClass] = useState(Active);
  const toggleClass = () => {
    //console.log(Active);

    //console.log(props.done);

    // console.log(Active);
    const listData = {
      id: props.id,
      name: props.name,
      Date: props.Date,
      text: props.text,
      tag: props.tag,
      done: !Active,
    };
    setClass(listData.done);

    props.modifydone(listData);
    console.log(listData);
  };
  const [enteredText, setEnteredText] = useState(props.text);

  //let text = props.text;
  const changeHandlercontent = (event) => {
    event.preventDefault();
    setEnteredText(event.target.value);
  };
  const changeContent = (event) => {
    event.preventDefault();
    setEnteredText(event.target.value);

    const listData = {
      id: props.id,
      name: props.name,
      Date: props.Date,
      text: enteredText,
      tag: props.tag,
    };
    //props.text = event.target.value;
    //setEnteredText(enteredText);

    props.modifylist(listData);
    //console.log(enteredText);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const listData = {
      id: props.id,
      name: props.name,
      Date: props.Date,
      text: props.text,
      tag: props.tag,
    };

    props.handleDelete(listData);
  };
  const UpContent = (event) => {
    event.preventDefault();

    const listData = {
      id: props.id,
      name: props.name,
      Date: props.Date,
      text: props.text,
      tag: props.tag,
      done: props.done,
    };

    setClass(listData.done);
    console.log(Active);
    //console.log(isActive);
    console.log(listData.done);
    props.UpHandler(listData);
  };
  const DownContent = (event) => {
    event.preventDefault();
    //setClass(props.done);
    const listData = {
      id: props.id,
      name: props.name,
      Date: props.Date,
      text: props.text,
      tag: props.tag,
      done: props.done,
    };
    setClass(listData.done);
    props.DownHandler(listData);
  };
  return (
    <li className={props.done ? "list2" : "list"}>
      <h2>To do name: {props.name}</h2>
      <h2>Text description:</h2>
      <p>{props.text}</p>
      <h2>
        Type here to edit:
        <input
          // cols="60"
          // rows="3"
          type="text"
          value={enteredText}
          onChange={changeHandlercontent}
        />
      </h2>

      <h2>
        Implementation Time: <ListDate Date={props.Date} />
      </h2>
      <h2>
        Remaining time:
        <Alarmtime Date={props.Date} name={props.name} />
      </h2>
      <h2>
        Modify time:
        <ListDate Date={props.checktime} />
      </h2>
      <h3>Tag: {props.tag}</h3>
      <button onClick={UpContent}>Up</button>
      <button onClick={DownContent}>Down</button>
      <button onClick={submitHandler}>Remove</button>
      <button onClick={changeContent}>Edit</button>
      <button onClick={toggleClass}>Done</button>
    </li>
  );
};

export default DoList;
