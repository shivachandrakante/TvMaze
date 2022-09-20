import React from "react";

function handle(index){
  return `location${index+1}`
}

function Block(props) {
  const listItems = props.cities.map((item,index) => {
    if (item.country === "India") {
      return <li key={handle(index)}>{item.name}</li>;
    } else {
      return;
    }
  });
  return <>
      <li key="location1">Goa</li>
    <li key="location2">Darjeeling</li>
    <li key="location3">Lonavala</li>
  </>;
}

export default Block;
