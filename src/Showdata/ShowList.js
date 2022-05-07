import React from "react";
import DoList from "./DoList";

//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./ShowList.css";
const ShowList = (props) => {
  // const filteredList = props.listClass.filter((newlist) => {
  //   return newlist.tag === props.item;
  // });
  // const setsearchText = props.listClass.filter((list2) => {
  //   return list2 === props.search;
  // });
  // const searchIndex = props.listClass.findIndex((list2) => {
  //   return list2 === props.search;
  // });
  // const element = props.listClass[searchIndex];
  // console.log(element);
  // console.log(searchIndex);

  return (
    <ul className="do-list">
      {props.listClass.map((list) => (
        <DoList
          key={list.id}
          id={list.id}
          name={list.name}
          Date={list.Date}
          text={list.text}
          tag={list.tag}
          done={list.done}
          checktime={list.checktime}
          handleDelete={props.deletelist}
          modifylist={props.modifylist}
          UpHandler={props.UpHandler}
          DownHandler={props.DownHandler}
          modifydone={props.modifydone}
        />
      ))}
    </ul>
  );
};

export default ShowList;
