import React, {useState, useCallback, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const initTable = [
  {"id": 1, "name": "Anya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 2, "name": "Petya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 3, "name": "Stepan", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 4, "name": "Vova", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 5, "name": "Vasya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false}
]

function App() {

  const [count, setCount] = useState(0)

  const handleChangeCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  useEffect(() => {
    console.log("mount")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span onClick={handleChangeCount}>
          {count}
        </span>
        {initTable.map((item, key) => {
          return <div key={key}>{item.name}</div>
        })}
      </header>
    </div>
  );
}

export default App;