import { useState } from "react";

function ColorBox({ color }) {
  const [boxColor, setBoxColor] = useState(color);

  const changeColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBoxColor(newColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: boxColor,
        width: "50px",
        height: "50px",
        margin: "5px",
      }}
    />
  );
}

export default ColorBox;
