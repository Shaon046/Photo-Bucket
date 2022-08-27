import { useState } from "react";
import classes from "./UserInput.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

const UserInput = (props) => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const history = useHistory();

  const searchHeandeler = () => {
    history.push(`/result/${userInput}`);
    props.setSearch(userInput);
    dispatch({ type: "SEARCH" });
    props.resetLoading(true);
   
  };

  const onChangeInputHandler = (eve) => {
    setUserInput(eve.target.value);
  };
  return (
    
      <div className={classes.main}>
        <img className={classes.img} src="newlogo.png" alt="LOGO" />

        <div>
          {" "}
          <input
            className={classes.inp}
            type="text"
            onChange={onChangeInputHandler}
          />
          <button className={classes.btn} onClick={searchHeandeler}>
            Search
          </button>
        </div>
      </div>
    
  );
};

export default UserInput;
export { UserInput };
