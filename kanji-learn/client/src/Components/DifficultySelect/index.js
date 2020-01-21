import React from 'react';

export default function Difficulty(props) {

    return (
        <div className={props.class}>
        <button className="diff-btn"><a href={props.src}>{props.difficulty}</a> </button>
        <p>{props.descript}</p>
        </div>
    );
}