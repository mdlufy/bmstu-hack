import React from 'react';
import DecreaseButton from './DecreaseButton';
import IncreaseButton from './IncreaseButton';

function ScaleGroup(props) {
    return (
        <div>
            <IncreaseButton />
            <DecreaseButton /> 
        </div>
    );
}

export default ScaleGroup;