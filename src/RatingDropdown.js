import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

function Score(props) {
    return (
        <button onClick = {props.onCLick}>
            {props.value}
        </button>
    )
}

function DropdownButton(props) {
    return (  
        <button onClick = {props.onClick}>
            DropdownButton
        </button>
    )
}

function Dropdown() {
    const [display, setDisplay] = useState('none');

    function handleClick(i) {
        console.log("Click");
        if (display =='none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
        if (i != -1) {
            console.log("Selected score " + i);
        }
    }

    function renderScore(i) {
        return (
            <Score value={i} onClick={() => handleClick(0)}/>
        );
    }
    return (
        <div>
            <DropdownButton onClick={() => handleClick(-1)}/>
            <div>
                {renderScore(1)}
                {renderScore(2)}
                {renderScore(3)}
                {renderScore(4)}
                {renderScore(5)}
                {renderScore(6)}
                {renderScore(7)}
                {renderScore(8)}
                {renderScore(9)}
                {renderScore(10)}
            </div>
        </div>
    )
}

class RatingDropdown extends React.Component {
    render() {
        return (
            <div>
                <Dropdown />

            </div>
        );
    }
}

export default RatingDropdown;