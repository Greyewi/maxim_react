import React, {useState} from 'react';


const SelectComponentUsingDiv = ({labels}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Choose an option");

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = label => () => {
        setSelectedOption(label);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <div style={{borderStyle:"solid 3px", borderBlockColor:"black",borderRadius:"5px", backgroundColor: 'white', color:"black"}}>
            <div style={{borderStyle:"solid 30px", borderBlockColor:"#ff1a1a"}} onClick={toggling}>
                {selectedOption}
            </div>
            {isOpen && (labels.filter(label => label !== selectedOption).map(
                        ((label,key) =>
                        <div key={key} style={{borderStyle:"solid 30px", borderBlockColor:"#ff1a1a"}} onClick={onOptionClicked(label)}>{label}</div>))
            )}
        </div>

    );
}


export default SelectComponentUsingDiv;