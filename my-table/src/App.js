import React, {useState, useCallback} from 'react';
import './App.css';
import Table from './components/Table'
import Form from './components/Form'

const initTable = [
  {"id": 1, "name": "Anya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 2, "name": "Petya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 3, "name": "Stepan", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 4, "name": "Vova", "description": "description", "info1": "info", "info2": "info", "isChecked" : false},
  {"id": 5, "name": "Vasya", "description": "description", "info1": "info", "info2": "info", "isChecked" : false}
]

function App() {
  const [table, setTable] = useState(initTable)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [info1, setInfo1] = useState('')
  const [info2, setInfo2] = useState('')

  const formObjects = {name, description, info1, info2}
  const formHandlers = {setName, setDescription, setInfo1, setInfo2}

  const handleCreate = useCallback(() => {
    const newRow = {
      id: table.length + 1,
      name : name,
      description: description,
      info1: info1,
      info2: info2,
      isChecked: false
    }

    setTable(table.concat([newRow]))
  }, [table, name, description, info1, info2])

  return (
    <div className="App">
      <header className="App-header">
        <Form {...formObjects} {...formHandlers} onCreate={handleCreate}/>
        <Table table={table}/>
      </header>
    </div>
  );
}

export default App;