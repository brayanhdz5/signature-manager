import React, { useRef } from 'react';
import Canvasdraw from 'react-canvas-draw';

function App() {

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const handleClick = () => {
    const data = firstCanvas.current.getSaveData();
    secondCanvas.current.loadSaveData(data);
  }

  const clearClick = () => {
    firstCanvas.current.clear()
  }

  return (
    <div>
      <h2>Sign Here</h2>
      <Canvasdraw
        brushRadius={1}
        canvasWidth={600}
        canvasHeight={200}
        ref={firstCanvas}
      />
      <button onClick={handleClick}>
        Save
      </button>
      <button onClick={clearClick}>
        Clear
      </button>
      <h3>Result</h3>
      <Canvasdraw
        brushRadius={1}
        hideGrid={true}
        canvasWidth={600}
        canvasHeight={200}
        ref={secondCanvas}
      />
    </div>
  );
}

export default App;
