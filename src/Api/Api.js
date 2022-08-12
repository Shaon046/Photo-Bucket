import axios from "axios";
import { useState, useEffect } from "react";

const LoadImages = () => {
  const [state, setState] = useState([]);

  const dependency = "Change only once"; //[useEffect Dependency]

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=lZhCat2FMbOtyilwt8ib_7XJpsjcobow8wTb7gXTHWk"
      )
      .then((data) => setState(data.data))
      .catch((err)=>console.log("error at API"))
  }, [dependency]);

  return state;
};

export default LoadImages;
