import React from 'react';

export default function HiraTile(props) {

    return (
        <div className={props.class + "tile"} id={props.id}>{props.question}</div>
    )
}