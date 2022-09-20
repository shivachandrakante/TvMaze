import React, { useState }  from "react";
import SelectComp from "./SelectComp"
function App(){
  const [type, setRadio] = useState()
  function changeRaido(newType){
    setRadio(newType);
  }
  return (
    <>
      <h1>TVmaze</h1>
      <h3>Search Your favourite shows</h3>
      <SelectComp onChange={changeRaido}/>
      {type && <h2>Hello {type}</h2>}
    </>
  );
}

export default App;
