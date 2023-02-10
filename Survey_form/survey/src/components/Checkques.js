import React, { useEffect, useState } from 'react'
import {arr} from "./StarRating"
import "../css/Checkques.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Checkbox } from '@mui/material';

const Checkques = (props) => {
    const [choices, setchoices] = useState([]);
    const [values,setvalue] = useState([]);

    useEffect(() => {
        arr[props.value] = values;
    },[choices])

    const handleCheckboxChange = (event) => {
        const id = Number(event.target.id);
        const choiceValue = props.list[id].name;
        setchoices((currentchoices) =>
            currentchoices.includes(id)
                ? currentchoices.filter((f) => f !== id)
                : [...currentchoices, id]
        );
        setvalue((oldarr) => 
            oldarr.includes(choiceValue)
                ? oldarr.filter((f) => f !== choiceValue) : [...oldarr,choiceValue]);
    };

        const checkbox = props.list.map((m) => (
        <span id="choices" key={m.key}>
            <Checkbox id={m.key} onClick={handleCheckboxChange} />
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