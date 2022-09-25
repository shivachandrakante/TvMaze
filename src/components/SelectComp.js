import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
function SelectComp(props) {
  const [type, setRadio] = useState("actor");
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [apiData, setapiData] = useState(null);
  useEffect(() => {
    const setTimeoutID = setTimeout(() => {
      const updatedData = fetchData(type, searchKeyWord);
      console.log(updatedData);
      //console.log(updatedData.length);
      //setapiData(updatedData.length);
    }, 400);
    return () => {
      console.log("Cleaun Up");
      clearTimeout(setTimeoutID);
    };
  }, [searchKeyWord]);
  function handleSearchKeyWord(event) {
    setSearchKeyWord(event.target.value);
  }
  function onChangeValue(event) {
    console.log(event.target.value);
    setRadio(event.target.value);
    props.onChange(event.target.value);
  }
  return (
    <>
      <div onChange={onChangeValue}>
        <label>
          <input
            type="radio"
            defaultChecked="checked"
            value="actor"
            name="type"
          />
          Actors
        </label>
        <label>
          <input type="radio" value="show" name="type" />
          Shows
        </label>
      </div>
      <div>
        <label>Enter {type === "Actor" ? "people" : "show"} below</label>
        <br />
        <input
          type="text"
          value={searchKeyWord}
          name="searchbar"
          onChange={handleSearchKeyWord}
        />
      </div>
    </>
  );
}
export default SelectComp;
