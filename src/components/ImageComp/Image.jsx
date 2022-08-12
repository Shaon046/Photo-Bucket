import classes from "./Image.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Image = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
    dispatch({
      type: "HDIMAGE",
      link: props.searchImageDownload || props.landingImageDownload,
    });
    history.push("/full-view");
  };

  return (
    <div>
      <img 
        className={classes.imgDiv }
        src={props.src }
        alt={props.src}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Image;
