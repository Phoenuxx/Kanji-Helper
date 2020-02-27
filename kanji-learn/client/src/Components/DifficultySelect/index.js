import React from 'react';

export default function Difficulty(props) {

    return (
        <div className={props.class} >
            <a class="btn btn-success" href={props.src} role="button">{props.difficulty}</a>
            <p>{props.descript}</p>
        </div>
    );
}