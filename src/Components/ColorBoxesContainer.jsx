import ColorBox from "./ColorBox";
import colors from "../data/data";

function ColorBoxesContainer() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        backgroundColor: "darkgray",
      }}
    >
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
}

export default ColorBoxesContainer;
