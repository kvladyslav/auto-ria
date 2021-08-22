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
            <div className={a.content}>
                <div className={a.name}><NavLink to={"/details/" + props.car.id}>{props.car.name}</NavLink></div>
                <div className={a.price}>
                    <span className={a.usd}>{props.car.price.usd} $ </span>
                    <span className={a.point}>•</span>
                    <span className={a.uah}> {props.car.price.uah} uah</span>"
                </div>
                <div className={a.description}>
                    <ul>
                        <li className={a.mileage}>
                            <i></i><span> {props.car.mileage} ths km</span>
                        </li>
                        <li className={a.fueltype}>
                            <i></i><span> {props.car.fueltype.name}</span>
                        </li>
                        <li className={a.location}>
                            <i></i><span> {props.car.city}</span>
                        </li>
                        <li className={a.model}>
                            <i></i><span> {props.car.model.name}</span>
                        </li>
                    </ul>
                    <div className={a.vin}>
                        <span>{props.car.vin}</span>
                    </div>
                    <p className={a.info}>
                        <span>{props.car.info}</span>
                        <label>...</label>
                    </p>
                </div>
                <div className={a.footer}>
                    <span className={a.date_added}>
                        <i className={a.icon}></i>
                        <span> {props.car.date_added}</span>
                    </span>
                    <div className={a.status}>
                        <a className={a.compare}>
                            <i></i>
                        </a>
                        <a className={a.parking}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <div className={a.check}></div>
                            </label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoCard;