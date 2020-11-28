import './style.css'
import PropTypes from 'prop-types';
import React from 'react'


const RadioButtonsBlock = ({label,selected,onChange}) => {
    
const handleChange= (event)=>{
    const{selected} = event.target;
    onChange(selected);
}
    return(
        <div>
            <input type="checkbox"
                   defaultChecked={selected}
                   value={selected}
                   onChange={handleChange}/>
                   <label >{label}</label>
        </div>

)

}

RadioButtonsBlock.propTypes = {
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}


export default RadioButtonsBlock;