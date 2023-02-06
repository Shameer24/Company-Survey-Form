import React, { useState } from 'react'


const Checkques = (props) => {
    const [participants, setParticipants] = useState([]);
    const handleCheckboxChange = (event) => {
        const id = event.target.id;
        setParticipants((currentParticipants) =>
            currentParticipants.includes(id)
                ? currentParticipants.filter((f) => f !== id)
                : [...currentParticipants, id]
        );
    };
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