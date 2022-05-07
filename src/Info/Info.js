const Info = () => {
  return (
    <div className="info">
      <section>
        <h1>The Info Page</h1>
        <h1>Author: Hung Truong</h1>
      </section>
      <section>
        <h3>Instruction: </h3>
        <p>There are three views: info, add data, show data (Tier 1)</p>
        <p>Introduction and information(Tier 2)</p>
        <h5>Tab Add data:</h5>
        <ol>
          <li>
            <p>
              You can add a new todo with tab add data (Tier 3) to database(Tier
              10)
            </p>
          </li>

          <li>
            <p>
              You can categorize todo-item with textual tag- You can create the
              new tag freely(Tier 5)
            </p>
          </li>
        </ol>
        <h5>Tab Show data:</h5>
        <ol>
          <li>
            <p>
              You must push the button Fetch Lists to receive data from
              database(Tier 10). After adding new data, you should push fetch
              button to receive new data.
            </p>
          </li>

          <h6>After receiving the data:</h6>

          <li>
            <p>
              You can remove any todo list with the Remove button(Tier 3).
              Database also remove this piece of data too.(Tier 10)
            </p>
          </li>
          <li>
            <p>
              You can edit the text description by writing a new description in
              the input area, after that you push the button edit, the data will
              be sent to the database with the new modified time and show you
              the new description. (Tier4 +Tier 10)
            </p>
          </li>
          <li>
            <p>
              You can reorder the todolist with two buttons: up and down. (Tier
              4)
            </p>
          </li>
          <li>
            <p>
              You can filter todolist in the section "filter by Tag". You can
              see all items or any item that you want.(Tier 6)
            </p>
          </li>
          <li>
            <p>
              You can mark todo items that you have finished without completely
              removing them by the button "Done". The finished todo item have
              the different color with original item.The new data will be sent
              to the database with the new modified time(Tier 7 + Tier 10)
            </p>
          </li>
          <li>
            Responsive: the menu bar will change from direction according to row
            into the direction according to columns in break point 500px. The
            size of all items will be scaled too.(Tier 8)
          </li>
          <p></p>
          <li>
            <p>
              You can search todo items based of their textual descriptions in
              the section "find text description". You can order the items by
              the modified time with the sort by date button (Tier 9)
            </p>
          </li>
          <li>
            <p>
              Each item shows the remaining time. When any remaining time
              becomes zero, the alarm will run to notify you that it's time to
              do (todo name).(Tier 11)
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};
export default Info;
