import React, { useEffect, useState } from "react";
function SelectComp(props) {
  const [type, setRadio] = useState("Actor");
  const [searchKeyWord, setSearchKeyWord] = useState("");
  useEffect(() => {
    const setTimeoutID = setTimeout(() => {
      console.log("Logged");
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
            value="Actor"
            name="type"
          />
          Actors
        </label>
        <label>
          <input type="radio" value="Show" name="type" />
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
