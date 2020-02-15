import React from 'react';

export default function Difficulty(props) {

    return (
        <div className={props.class} >
            <a href={props.src}><button className="diff-btn">{props.difficulty}</button></a>
            <p>{props.descript}</p>
        </div>
    );
}