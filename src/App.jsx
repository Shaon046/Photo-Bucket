import "./App.css";
import LoadImages from "./Api/LandingPageApi";
import SearchImage from "./Api/SearchApi";
import NoImageFound from "./Pages/Error/NoImageFound";
import Image from "./components/ImageComp/Image";
import HdImage from "./Pages/HdImage/HdImage";
import Loading from "./Pages/LoadingPage/Loading";
import UserInput from "./components/Input/UserInput";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [noImageFound, setNoImageFound] = useState(false);

  //redux
  const searchStatus = useSelector((state) => {
    return state.searchStatus;
  });

  //response
  const landingPageData = LoadImages();
  const searchData = SearchImage(search);

  //arrayValue
  const arrValue = searchData.values();

  //
  useEffect(() => {
    if (searchData.length === 0) {
      setNoImageFound(true);
    }
    if (searchData.length !== 0) {
      setNoImageFound(false);
    }
  }, [searchData.length]);

  useEffect(() => {
    if (searchStatus === true && landingPageData.length !== 0) {
      setLoading(false);
    }

    if (searchStatus === false && searchData) {
      setLoading(false);
    }
  }, [landingPageData.length, searchData, searchStatus, search, arrValue]);

 

  return (
    <div className="container">
      <div>
        <UserInput
          setSearch={setSearch}
          search={search}
          resetLoading={setLoading}
        />
      </div>

      {loading && <Loading />}

      {noImageFound && !searchStatus && <NoImageFound />}

      <Route path="/" exact>
        <div className="contain">
          {searchStatus &&
            landingPageData.map((img) => (
              <Image
                src={img.urls.thumb}
                key={img.id}
                landingImageDownload={img.urls.full}
              />
            ))}
        </div>
      </Route>

      <Route path={`/result/${search}`} exact>
        <div className="contain">
          {searchData.map((img) => (
            <Image
              src={img.urls.thumb}
              key={img.id}
              searchImageDownload={img.urls.full}
            />
          ))}
        </div>
      </Route>

      <Route path="/full-view">
        <HdImage />{" "}
      </Route>

      <Route path="/image-not-found">
        <NoImageFound />
      </Route>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
