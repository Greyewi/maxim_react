import React from 'react'
import './style.css'

const Actions = ({handleFilterData}) => {

  return (
    <span className="actions">
      <button>Редактировать</button>
      <input type="text" onChange={e => handleFilterData(e, 'name')}/>
      <button>Удалить</button>
    </span>
  )
}

export default Actions