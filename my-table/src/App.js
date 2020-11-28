import React, {useState, useCallback, useEffect} from 'react';
import './App.css';
import Table from './components/Table'
import Form from './components/Form'
import Actions from "./components/Actions"
import RadioButtonsBlock from "./components/RadioButtonsBlock";
import HandmadeSwitch from "./components/HandmadeSwitch";


function App() {
    const labels = ["first", "second", "third"];
    const [table, setTable] = useState([])
    const [filterTable, setFilterTable] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [info1, setInfo1] = useState('')
    const [info2, setInfo2] = useState('')
    const [acceptance, setAcceptance] = useState(false)

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Greyewi/9929061c594ef7a689d21e5c72c96f3b/raw/f7519c95f4c00b165e8fc39cba7fb07f15c61fdb/initial_Table.json')
            .then(data => data.json())
            .then(data => setTable(data))
    }, [])

    const formObjects = {name, description, info1, info2}
    const formHandlers = {setName, setDescription, setInfo1, setInfo2}

    const handleRadioButtonsBlock = (acceptance) => {
        setAcceptance(acceptance)
    };

    const handleCreate = useCallback(() => {
        const newRow = {
            id: table.length + 1,
            name: name,
            description: description,
            info1: info1,
            info2: info2,
            isChecked: false
        }

        setTable(table.concat([newRow]))
    }, [table, name, description, info1, info2])

    const handleSortIncrease = useCallback(field => {
        const [sortTable, setSortTable] = getCurrentTable(table, setTable, filterTable, setFilterTable)

        const newTable = [...sortTable].sort((a, b) => {
            if (a[field] < b[field]) {
                return -1
            } else if (a[field] > b[field]) {
                return 1
            } else {
                return 0
            }
        })
        setSortTable(newTable)
    }, [table, filterTable])

    const handleSortDegrease = useCallback(field => {
        const [sortTable, setSortTable] = getCurrentTable(table, setTable, filterTable, setFilterTable)

        const newTable = [...sortTable].sort((a, b) => {
            if (a[field] < b[field]) {
                return 1
            } else if (a[field] > b[field]) {
                return -1
            } else {
                return 0
            }
        })

        setSortTable(newTable)
    }, [table, filterTable])

    const sortingHandlers = {handleSortIncrease, handleSortDegrease}

    const handleFilterData = useCallback((event, field) => {
        const {target: {value}} = event
        const newTable = [...table].filter(f => f[field].indexOf(value) >= 0)
        setFilterTable(newTable)
    }, [table])

    console.log(acceptance)

    return (
        <div className="App">
            <header className="App-header">
                <Form {...formObjects} {...formHandlers} onCreate={handleCreate}/>
                <Table table={getCurrentTable(table, setTable, filterTable, setFilterTable)[0]} {...sortingHandlers}/>
                <Actions handleFilterData={handleFilterData}/>
                <RadioButtonsBlock onChange={handleRadioButtonsBlock}
                                   selected={acceptance}
                                   labels={labels}/>
                <HandmadeSwitch/>
            </header>

        </div>
    );
}

const getCurrentTable = (table, setTable, filterTable, setFilterTable) =>
    filterTable && filterTable.length ? [filterTable, setFilterTable] : [table, setTable]

export default App;