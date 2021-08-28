import a from "./AutoCard.module.css";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {parkingCreator, compareCreator} from "../../../redux/carsReducer";

import styled from 'styled-components';

const AutoCard = (props) => {
    const [checked, setChecked] = React.useState(
        JSON.parse(localStorage.getItem('items')) ||
        {
            id: JSON.parse(localStorage.getItem('allCars')) === null ? ''
                : JSON.parse(localStorage.getItem('allCars')).id,
            parking: JSON.parse(localStorage.getItem('allCars')) === null ? false
                : JSON.parse(localStorage.getItem('allCars')).parking,
            compare: JSON.parse(localStorage.getItem('allCars')) === null ? false
                : JSON.parse(localStorage.getItem('allCars')).compare,
        }
    );

    const [active, setActive] = React.useState('shortInfo')

    const Info = () => {
        return (
            <p className={a.shortInfo}>
                <span>{props.car.info}</span>
                <button onClick={() => setActive('fullInfo')}>...</button>
            </p>
        )
    }


    const FullInfo = () => {
        return (
            <p className={a.fullInfo}>
                <span>{props.car.info}</span>
                <button onClick={() => setActive('shortInfo')}>...</button>
            </p>
        )
    }

    useEffect(() => {
        localStorage.setItem('allCars', JSON.stringify(checked))
    }, [checked])


    const handleChange = (e) => {
        const { name, id } = e.target;
        setChecked({
            ...checked,
            id: id,
            [name]: !checked[name]
        })
    }

    props.dispatch(parkingCreator(checked.parking?.toString(), props.car.id));
    props.dispatch(compareCreator(checked.compare?.toString(), props.car.id));

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
                    <span className={a.uah}> {props.car.price.uah} uah</span>
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
                    <div>{active === 'shortInfo' && <Info />}</div>
                    <div>{active === 'fullInfo' && <FullInfo />}</div>
                </div>
                <div className={a.footer}>
                    <span className={a.date_added}>
                        <i className={a.icon}></i>
                        <span> {props.car.date_added}</span>
                    </span>
                    <div className={a.status}>
                        <a className={a.compare}>
                            <label>
                                <input
                                    type="checkbox"
                                    id={props.car.id}
                                    value={JSON.parse(localStorage.getItem('allCars')) === null ? false
                                        : JSON.parse(localStorage.getItem('allCars')).compare}
                                    onClick={handleChange}
                                    name="compare"
                                />
                                {checked.compare === false  ?
                                    <div className={a.checkCompare}></div> :
                                    <div className={a.checkCompareSelected}></div>}
                            </label>
                        </a>
                        <a className={a.parking}>
                            <label>
                                <input
                                    type="checkbox"
                                    id={props.car.id}
                                    value={JSON.parse(localStorage.getItem('allCars')) === null ? false
                                        : JSON.parse(localStorage.getItem('allCars')).parking}
                                    onClick={handleChange}
                                    name="parking"
                                />
                                {checked.parking === false  ?
                                    <div className={a.checkParking}></div> :
                                    <div className={a.checkParkingSelected}></div>}
                            </label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoCard;