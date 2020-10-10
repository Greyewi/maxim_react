import React,{useState, memo} from 'react'
import './style.css'

const SortedColumn = ({children, sortPosition, handleSortDegrease, handleSortIncrease, setSortPosition}) => {
  return <span
    onClick={() => {
      sortPosition ?
        handleSortDegrease(children) :
        handleSortIncrease(children)

      setSortPosition(!sortPosition)
    }}
  >{children}</span>
}


const Table = ({table, ...sortingHandlers}) => {
  const [sortPosition, setSortPosition] = useState(true)

  return(
    <table>
      <thead>
        <tr>
          <th>
            <SortedColumn
              sortPosition={sortPosition}
              setSortPosition={setSortPosition}
              {...sortingHandlers}
            >
              id
            </SortedColumn>
          </th>
          <th>
            <SortedColumn
              sortPosition={sortPosition}
              setSortPosition={setSortPosition}
              {...sortingHandlers}
            >
              name
            </SortedColumn>
          </th>
          <th>
            <SortedColumn
              sortPosition={sortPosition}
              setSortPosition={setSortPosition}
              {...sortingHandlers}
            >
              description
            </SortedColumn>
          </th>
          <th>
            <SortedColumn
              sortPosition={sortPosition}
              setSortPosition={setSortPosition}
              {...sortingHandlers}
            >
              info1
            </SortedColumn>
          </th>
          <th>
            <SortedColumn
              sortPosition={sortPosition}
              setSortPosition={setSortPosition}
              {...sortingHandlers}
            >
              info2
            </SortedColumn>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {table.map((row, rowKey) => <tr key={rowKey}>{
          Object.keys(row).map((item, key) => <RowFormatter key={key} row={row} item={item}/>)}
        </tr>)}
      </tbody>
    </table>
  )
}

const RowFormatter = ({row, item}) => <td>{
    item === 'isChecked' ? <input type="checkbox" defaultChecked={!!row[item]}/> : row[item]
  }</td>


function areEqual(prevProps, nextProps) {

  if(JSON.stringify(prevProps.table) === JSON.stringify(nextProps.table)){
    return true
  } else {
    return false
  }

  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}

export default memo(Table, areEqual)