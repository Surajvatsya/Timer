import React, { useState } from "react";

function App() {
  setInterval(myTime, 1000);
  const time = new Date().toLocaleTimeString();
  const [curr, setCurr] = useState(time);
  function myTime() {
    const newtime = new Date().toLocaleTimeString();
    setCurr(newtime);
  }
  return (
    <div className="container">
      <h1>{curr}</h1>
      <button onClick={myTime}>Get Time</button>
    </div>
  );
}

export default App;
