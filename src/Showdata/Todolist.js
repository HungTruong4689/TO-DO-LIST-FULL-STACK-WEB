import React, { useState } from "react";

import "./Todolist.css";
import Filter from "./Filter";
import ShowList from "./ShowList";
const Todolist = (props) => {
  const [filteredTag, setFilteredTag] = useState("all");
  const tag = ["all"];
  props.listClass.filter((newlist) => {
    if (tag.includes(newlist.tag)) {
      return tag;
    } else {
      return tag.push(newlist.tag);
    }
  });
  const filterChangeHandler = (selectedTag) => {
    setFilteredTag(selectedTag);
  };
  const [searchText, setsearchText] = useState("");
  const findSearch = (item) => {
    setsearchText(item.toLowerCase());
  };
  // const findSearch = (item) => {
  //   const index = props.listClass.findIndex((todo) => {
  //     return todo.text.toLowerCase().includes(item.toLowerCase());
  //   });
  //   const element = props.listClass[index];
  //   console.log(item);
  //   console.log(index);
  //   console.log(element);
  //   setsearchText(element);
  // };
  // const List2 = props.listClass.filter((newlist) => {
  //   return newlist.tag === filteredTag;
  // });
  // const List = props.listClass.filter((newlist) => {
  //   return newlist.text.toLowerCase().includes(searchText);
  // });
  const List3 = props.listClass.filter((newlist) => {
    if (filteredTag === "all" && !searchText) {
      // console.log("from condition", props.listClass);
      return props.listClass;
    }

    if (filteredTag === "all" && !!searchText) {
      // console.log("List2 from condition", List2);
      return newlist.text.toLowerCase().includes(searchText);
    }
    if (searchText === "" && newlist.tag === filteredTag) {
      return newlist.tag === filteredTag;
    }
    if (!!searchText && newlist.tag === filteredTag) {
      return (
        newlist.tag === filteredTag &&
        newlist.text.toLowerCase().includes(searchText)
      );
    }
  });
  // const List3 = props.listClass.filter(
  //   (newlist) => {
  //     if (filteredTag === "all" && !(searchText)) {
  //       return props.listClass;
  //     }

  //     if (filteredTag === "all" && !!(searchText)) {
  //       return newlist.text.toLowerCase().includes(searchText);
  //     }
  //     if (searchText === "" && newlist.tag === filteredTag) {
  //       // return newlist.tag === filteredTag;
  //       return List2;
  //     }
  //     if (newlist.tag === filteredTag) {
  //       // return newlist.tag === filteredTag;
  //       if (newlist === searchText) {
  //         return List.filter((todo) => todo === searchText);
  //       } else {
  //         return List;
  //       }
  //     }
  //     if (newlist === searchText) {
  //       // return newlist === searchText;
  //       if (newlist.tag === filteredTag) {
  //         return List2.filter((todo) => todo.tag === filteredTag);
  //       } else {
  //         return List2;
  //       }
  //     } // }
  //     // else {
  //     //   return List2;
  //     // }
  //     // if (newlist.tag === filteredTag && newlist === searchText) {
  //     //   return List && List2;
  //     // }
  //   }

  //   // } else {
  //   //   return props.listClass;
  //   // }
  // );
  return (
    <div>
      <Filter
        choose={tag}
        selected={filteredTag}
        onChangeFilter={filterChangeHandler}
        onSearch={findSearch}
      />

      <ShowList
        listClass={List3}
        item={filteredTag}
        search={searchText}
        deletelist={props.deletelist}
        modifylist={props.modifylist}
        UpHandler={props.UpHandler}
        DownHandler={props.DownHandler}
        modifydone={props.modifydone}
      />
    </div>
  );
};

export default Todolist;
