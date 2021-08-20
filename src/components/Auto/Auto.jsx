import React from "react";
import AutoCard from "./AutoCard/AutoCard";

const Auto = (props) => {
    return (
        <div>
            {props.cars.map(car => {
                return (<AutoCard car={car} dispatch={props.dispatch}/>)
            })}
        </div>
    );
}

export default Auto;