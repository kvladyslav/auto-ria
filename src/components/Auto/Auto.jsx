import React from "react";
import AutoCard from "./AutoCard/AutoCard";
import styled from 'styled-components';

const AutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Auto = (props) => {
    return (
        <AutoWrapper>
            {props.cars.map(car => {
                return (<AutoCard car={car} cars={props.cars} dispatch={props.dispatch}/>)
            })}
        </AutoWrapper>
    );
}

export default Auto;

