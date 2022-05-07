import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Info from "./Info/Info";
import Mainheader from "./Mainheader/Mainheader";
import axios from "axios";
import Todolist from "./Showdata/Todolist";
import NewList from "./Inputdata/NewList";
function App() {
  const [lists, setLists] = useState([]);

  async function fetchListHandler() {
    const response = await fetch("http://localhost:3010/todolist/");
    const data = await response.json();

    // const loadedList = [];
    // for (const key in data) {
    //   loadedList.push({
    //     id: key,
    //     name: data[key].name,
    //     Date: new Date(data[key].Date),
    //     text: data[key].text,
    //     tag: data[key].tag,
    //     done: data[key].done,
    //   });
    // }
    // setLists(loadedList);
    const transformedLists = data.map((listData) => {
      return {
        id: listData.id,
        name: listData.name,
        Date: new Date(listData.Date),
        text: listData.text,
        tag: listData.tag,
        done: listData.done,
        checktime: new Date(listData.checktime),
      };
    });
    setLists(transformedLists);
  }
  async function addListHandler(list2) {
    const response = await fetch("http://localhost:3010/todolist/", {
      method: "POST",
      body: JSON.stringify(list2),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  function deletelisthandler(deleteitem) {
    const updated = [...lists].filter((todo) => todo.id !== deleteitem.id);
    console.log(updated);
    axios
      .delete("http://localhost:3010/todolist/" + deleteitem.id)
      .then(() => setLists(updated));
    //setLists(updated);
    //console.log(itemlist);
    // console.log(deleteindex);
  }
  async function modifylisthandler(item) {
    console.log(item);

    await axios.patch(`http://localhost:3010/todolist/${item.id}`, {
      text: item.text,
      checktime: new Date(),
    });
    //setLists(updated);
    //console.log(itemlist);
    // console.log(deleteindex);
    const response = await fetch(`http://localhost:3010/todolist/`);
    const data = await response.json();

    const transformedLists = data.map((listData) => {
      return {
        id: listData.id,
        name: listData.name,
        Date: new Date(listData.Date),
        text: listData.text,
        tag: listData.tag,
        done: listData.done,
        checktime: new Date(listData.checktime),
      };
    });
    setLists(transformedLists);
  }
  async function modifydonehandler(item) {
    console.log(item.done);

    await axios.patch(`http://localhost:3010/todolist/${item.id}`, {
      done: item.done,
      checktime: new Date(),
    });
    const response = await fetch(`http://localhost:3010/todolist/`);
    const data = await response.json();
    console.log(data);
    const transformedLists = data.map((listData) => {
      return {
        id: listData.id,
        name: listData.name,
        Date: new Date(listData.Date),
        text: listData.text,
        tag: listData.tag,
        done: listData.done,
        checktime: new Date(listData.checktime),
      };
    });
    setLists(transformedLists);
    //setLists(data);
    // await axios.get(`http://localhost:3010/todolist/${item.id}`);
    //setLists(updated);
    //console.log(itemlist);
    // console.log(deleteindex);
    // const data = await response.json();
    // const data = await response.json();

    // const loadedList = [];
    // for (const key in data) {
    //   loadedList.push({
    //     id: key,
    //     name: data[key].name,
    //     Date: new Date(data[key].Date),
    //     text: data[key].text,
    //     tag: data[key].tag,
    //     done: data[key].done,
    //   });
    // }
    // setLists(loadedList);
  }
  function arrayUp(item2) {
    var old_Index = [...lists].findIndex((value) => {
      return value.id === item2.id;
    });
    var element = lists[old_Index];
    var new_Index;
    if (old_Index === 0) {
      new_Index = old_Index;
    } else {
      new_Index = old_Index - 1;
    }
    while (old_Index < 0) {
      old_Index += [...lists].length;
    }
    while (new_Index < 0) {
      new_Index += [...lists].length;
    }
    if (new_Index >= [...lists].length) {
      var k = new_Index - [...lists].length;
      while (k-- + 1) {
        lists.push(undefined);
      }
    }
    console.log(old_Index);
    console.log(element);

    var updated = [...lists];

    updated.splice(new_Index, 0, updated.splice(old_Index, 1)[0]);

    //console.log(updated);

    setLists(updated);
  }
  function arrayDown(item3) {
    var old_Index = [...lists].findIndex((value) => {
      return value.id === item3.id;
    });
    var element = lists[old_Index];
    var new_Index;
    // while (old_Index < 0) {
    //   old_Index += [...lists].length;
    // }
    // while (new_Index < 0) {
    //   new_Index += [...lists].length;
    // }
    // while (old_Index > [...lists].length) {
    //   old_Index -= [...lists].length;
    // }
    // while (old_Index > [...lists].length) {
    //   new_Index -= [...lists].length;
    // }
    if (old_Index === [...lists].length - 1) {
      new_Index = old_Index;
    } else {
      new_Index = old_Index + 1;
    }
    if (new_Index >= [...lists].length) {
      var k = new_Index - [...lists].length + 1;
      while (k--) {
        lists.push(undefined);
      }
    }
    console.log(old_Index);
    console.log(element);

    console.log([...lists]);
    var updated = [...lists];
    console.log(updated);
    updated.splice(new_Index, 0, updated.splice(old_Index, 1)[0]);

    //console.log(updated);

    setLists(updated);
  }
  function sortDate() {
    const sortList = [...lists].sort((a, b) => {
      return new Date(b.checktime) - new Date(a.checktime);
    });
    console.log(sortList);
    setLists(sortList);
  }
  return (
    <div>
      <Mainheader />
      <main>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/input">
          <section>
            <NewList onAddList={addListHandler} />
          </section>
        </Route>
        <Route path="/show">
          <section>
            <button onClick={fetchListHandler}>Fetch Lists</button>
          </section>
          <section>
            <button onClick={sortDate}>Sort by date</button>
          </section>
          <section>
            <Todolist
              listClass={lists}
              deletelist={deletelisthandler}
              modifylist={modifylisthandler}
              UpHandler={arrayUp}
              DownHandler={arrayDown}
              sortbyDate={sortDate}
              modifydone={modifydonehandler}
            />
          </section>
        </Route>
      </main>
    </div>
  );
}

export default App;
