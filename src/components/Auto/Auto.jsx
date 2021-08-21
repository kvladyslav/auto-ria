import React from "react";
import AutoCard from "./AutoCard/AutoCard";
import a from './Auto.module.css'

const Auto = (props) => {
    return (
        <div className={a.wrapper}>
            <div className={a.auto_wrapper}>
                {props.cars.map(car => {
                    return (<AutoCard car={car} dispatch={props.dispatch}/>)
                })}
            </div>
        </div>
    );
}

export default Auto;

