import React from 'react';

export default function HiraTile(props) {

    return (
        <div className={props.class + "tile"}>{props.question}</div>
    )
}