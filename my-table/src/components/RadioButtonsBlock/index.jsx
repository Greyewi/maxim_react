import './style.css'
import PropTypes from 'prop-types';
import React from 'react'


const RadioButtonsBlock = ({labels,selected,onChange}) => {
    
const handleChange= (event)=>{
    const{checked} = event.target;
    onChange(checked);
}
const listItems = labels.map(label =>
            <div >
            <input type="checkbox"
                   defaultChecked={selected}
                   value={selected}
                   onChange={handleChange}/>
                {label}
            </div>

)
    return(
        <div>
            {listItems}
        </div>

)

}

RadioButtonsBlock.propTypes = {
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}


export default RadioButtonsBlock;