import React from "react";

function App() {
  setInterval(Display);

  let now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);

  function Display() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Display}>Get Time</button>
    </div>
  );
}

export default App;
