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
        <div className={a.auto_item}>
            <div className={a.auto_image}>
                <img src={props.car.image.full}/>
            </div>
            <div className={a.description}>
                <div className={a.name}><NavLink to={"/details/" + props.car.id}>{props.car.name}</NavLink></div>
                <div>{props.car.model.name}</div>
                <div>{props.car.mileage}</div>
                <div>{props.car.fueltype.name}</div>
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
                <div>{props.car.newState}</div>
            </div>
        </div>
    );
}

export default AutoCard;