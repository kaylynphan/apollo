import React from 'react';
import { useState } from 'react';
// import { render } from 'react-dom';
import './RatingDropdown.css'

function Score(props) {
    return (
        <button class="score" onClick = {props.onClick}>
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
        if (i === -1) {
            console.log("Toggle");
        } else {
            console.log("Clicked on " + i);
        }
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    function renderScore(i) {
        return (
            <Score value={i} onClick={() => handleClick(i)}/>
        );
    }
    return (
        <div>
            <DropdownButton onClick={() => handleClick(-1)}/>
            <div class="scoreList">
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