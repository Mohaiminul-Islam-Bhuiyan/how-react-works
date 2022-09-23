import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style = {{border : '2px solid purple', margin:'15px'}}>
            <h1>This is my smart watch</h1>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De dourrrr....</button>
            <Display name="garmin" steps = {steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;