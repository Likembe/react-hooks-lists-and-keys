import React from "react";

//ColorItem component
function ColorItem(props) {
  return <li style={{color: props.color}}>{props.color}</li>;
}


//ColorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color}/>;
  });


  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
