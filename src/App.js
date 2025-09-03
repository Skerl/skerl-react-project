import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('Text in input')
  console.log(count)
  console.log(setCount)

  function decrimnet() {
    setCount(count+1)
  }

  function incriment() {
    setCount(count-1)
  }


  return (
    <div className="App">
      <h1>Likes: {count}</h1>
      <h1>Value: {value}</h1>
      <input>
        type="text"
        value={value}
        onChange={event => setValue(even)}
      </input>
      <button onClick={incriment}>Inecrement</button>
      <button onClick={decrimnet}>Decrement</button>
    </div>
  );
}

export default App;
