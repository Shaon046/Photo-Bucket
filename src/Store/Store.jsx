import { legacy_createStore as createStore } from "@reduxjs/toolkit";

//const [searchTrue,setSearchTrue]=useState(false)   ////redux

const InitialSearchStatus = { searchStatus: true, fullImageLink: "" };

const searchStausReducer = (state = InitialSearchStatus, action) => {
  if (action.type === "SEARCH") {
    return {
      searchStatus: (state.searchStatus = false),
      fullImageLink: (state.fullImageLink = action.link),
    };
  }

  if (action.type === "HDIMAGE") {
    return {
      searchStatus: (state.searchStatus = true),
      fullImageLink: (state.fullImageLink = action.link),
    };
  }

  return state;
};

const Store = createStore(searchStausReducer);

export default Store;
