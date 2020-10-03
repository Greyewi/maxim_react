import React from 'react'
import './style.css'

const Form = ({name, description, info1, info2, setName, setDescription, setInfo1, setInfo2, onCreate}) => {

  return(
    <section>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="text" name="info1" value={info1} onChange={e => setInfo1(e.target.value)}/>
      <input type="text" name="info2" value={info2} onChange={e => setInfo2(e.target.value)}/>
      <button onClick={onCreate}>Создать</button>
    </section>
  )
}

export default Form