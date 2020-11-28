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
    <div>
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
    selected: PropTypes.bool.isRequired,
    label: PropTypes.array.isRequired,
    onChange:PropTypes.func.isRequired,
}


export default RadioButtonsBlock;