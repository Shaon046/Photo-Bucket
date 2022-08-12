import classes from './Hdimage.module.css'
import { useSelector } from "react-redux";

const HdImage = () => {
  const link = useSelector((state) => state.fullImageLink);
 // console.log(link, "from  Hdimage");
  return (
    <>
      {" "}
      <img className={classes.imgVwe} src={link} alt={link} />
    </>
  );
};

export default HdImage;
