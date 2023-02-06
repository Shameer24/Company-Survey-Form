import React, { useEffect, useState } from 'react'
import {arr} from "./StarRating"

const Checkques = (props) => {
    const [participants, setParticipants] = useState([]);
    const [values,setvalue] = useState([]);

    useEffect(() => {
        arr[props.value] = values;
    },[participants])

    const handleCheckboxChange = (event) => {
        const id = Number(event.target.id);
        const choiceValue = props.list[id].name;
        setParticipants((currentParticipants) =>
            currentParticipants.includes(id)
                ? currentParticipants.filter((f) => f !== id)
                : [...currentParticipants, id]
        );
        setvalue((oldarr) => 
            oldarr.includes(choiceValue)
                ? oldarr.filter((f) => f !== choiceValue) : [...oldarr,choiceValue]);
    };

    

    console.log(arr);
    const checkbox = props.list.map((m) => (
        <span key={m.key}>
            <input type="checkbox" id={m.key} onClick={handleCheckboxChange} />
            {m.name}
            <br></br>
        </span>
    ));

    return (
        <div>
            <div>{checkbox}</div>
        </div>
    );
};

export default Checkques