import './style.css'
import PropTypes from 'prop-types';
import React, {useState} from 'react'


const RadioButtonsBlock = ({labels, defaultChecked = []}) => {
  const [checkArray, setCheckArray] = useState(defaultChecked)

  const handleChange = (event, key) => {
    const {checked} = event.target;
    if(checked){
      setCheckArray(checkArray => {
        const newArray = [...checkArray]
        newArray.push(key)
        return newArray
      })
    } else {
      setCheckArray(checkArray => checkArray.filter(f => f !== key))
    }
  }

  return(
    <div color="white">
      {labels.map((label, key) =>
        <div key={key}>
          <input
            type="checkbox"
            defaultChecked={checkArray.indexOf(key) !== -1}
            checked={checkArray.indexOf(key) !== -1}
            onChange={e => handleChange(e, key)}
          />
          {label}
        </div>)}
    </div>

  )

}

RadioButtonsBlock.propTypes = {
    label: PropTypes.array,
    onChange:PropTypes.func,
}


export default RadioButtonsBlock;