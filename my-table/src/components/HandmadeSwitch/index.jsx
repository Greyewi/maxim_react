import React from 'react';
import PropTypes from "prop-types";
import "./style.css"

const HandmadeSwitch = () => {


    return (
        <label className="switch">
            <input className="checkbox"/>
            <span className="slider"/>
        </label>

    )
}

HandmadeSwitch.propTypes = {
    selected: PropTypes.bool.isRequired,
    label: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default HandmadeSwitch;