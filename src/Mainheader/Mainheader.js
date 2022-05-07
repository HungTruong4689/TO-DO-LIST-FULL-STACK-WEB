import { NavLink } from "react-router-dom";
import classes from "./Mainheader.module.css";
const Mainheader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div>
          <NavLink activeClassName={classes.active} to="/info">
            Info
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={classes.active} to="/input">
            Add data
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={classes.active} to="/show">
            Show data
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Mainheader;
