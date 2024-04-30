import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setData(newValue);
  }
  function addItem() {
    setItems((prev) => {
      return [...prev, data];
    });
    setData("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={data} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
