import React from "react";

function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue",
  ];
  const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
];

const userHeadings = users.map((user) => {
  return <h1 key={user.id}>{user.firstName},{user.lastName}</h1>;
});

 const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });
  
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
        {userHeadings}
      </ol>
    </div>
  );
}

export default ColorList