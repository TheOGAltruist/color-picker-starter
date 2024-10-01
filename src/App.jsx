import { useState } from "react";


// Write your Color component here
const Color = ({color, selectedColor, setSelectedColor}) => {
  
  const isSelected = selectedColor == color ? "selected" : "";
  return <div className={`${color} ${isSelected}`} onClick={() => setSelectedColor(color)}></div>  
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
