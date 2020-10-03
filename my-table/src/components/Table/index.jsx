import React,{memo} from 'react'
import './style.css'

const Table = ({table}) => {
  console.log("render")
  return(
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>info1</th>
          <th>info2</th>
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
    item === 'isChecked' ? <input type="checkbox" checked={row[item]}/> : row[item]
  }</td>


function areEqual(prevProps, nextProps) {

  if(prevProps.table.length === nextProps.table.length){
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