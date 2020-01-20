import React from 'react';

export default function Difficulty(props) {

    return (
        <button className={props.class}><a href={props.src}>{props.difficulty}</a> </button>
    );
}