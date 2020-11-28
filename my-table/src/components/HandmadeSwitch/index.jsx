import React, {useState} from 'react';
import "./style.css"

const HandmadeSwitch = ({defaultValue = false, name}) => {
  const [value, setValue] = useState(defaultValue)

    return (
        <label className="switch">
            <input
              className="checkbox"
              type="checkbox"
              id={name}
              name={name}
              checked={value}
              onChange={event => {
                setValue(event.target.checked)
              }}/>
            <span className="slider"/>
        </label>

    )
}


export default HandmadeSwitch;