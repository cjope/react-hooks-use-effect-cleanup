import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);


  const clockButton = (showClock === true ? "Hide Clock" : "Show Clock") 

  return (
    <div>
      <button onClick={() => setShowClock(!showClock)}>{clockButton}</button>
      {showClock ? <Clock /> : null}
    </div>
  );
}

export default App;
