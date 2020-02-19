import React from 'react';

export default function HiraTile(props) {

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div className=" flip-card-front" >{props.question}</div>
                </div>
                <div class="flip-card-back">
                    <p>{props.hint}</p>
                </div>
            </div>
        </div>
    )
}