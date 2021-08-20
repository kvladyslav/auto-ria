import a from "./AutoCard.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {parkingCreator} from "../../../redux/carsReducer";

const AutoCard = (props) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
    props.dispatch(parkingCreator(checked.toString(), props.car.id));
    return (
        <div>
            <div className={a.card}>
                <div className={a.image}>
                    <img src={props.car.image.thumb}/>
                </div>
                <div className={a.name}><NavLink to={"/details/" + props.car.id}>{props.car.name}</NavLink></div>
                <div className={a.description}>
                    <ul>
                        <li>{props.car.brand.name}</li>
                        <li>{props.car.model.name}</li>
                        <li>{props.car.mileage}</li>
                        <li>{props.car.fueltype.name}</li>
                        <li>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                    <div className={a.check}></div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AutoCard;