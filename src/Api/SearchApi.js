import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const SearchImage = (query='') => {       //to prevent auto call of search
  
  const [state, setState] = useState([]);

  useEffect(() => {
    if(query!==''){
      axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=lZhCat2FMbOtyilwt8ib_7XJpsjcobow8wTb7gXTHWk`
      )
      .then((data) => {return setState(data.data.results), console.log(data)})
      .catch((err)=>console.log("error at SearchApi"))
    } }, [query]);

  return state;
};

export default SearchImage;
