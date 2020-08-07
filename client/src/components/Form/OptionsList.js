import React from 'react';


const workoutTypes = ["Cardio", "Strength Training", "High Intensity", "Flexibility", "Yoga", "Pilates"];

function OptionsList () {
    return (
        workoutTypes.map(option => 
                    <option key={option} value={option}>                                   
                    {option}
                    </option>)
                   );
}

export default OptionsList;