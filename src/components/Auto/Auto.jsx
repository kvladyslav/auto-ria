import a from './Auto.module.css'
import {NavLink} from "react-router-dom";

const Auto = (props) => {
    return (
        <div>
            {props.cars.map(car => {
                return (
                    <div className={a.card}>
                        <div className={a.image}>
                            <img src={car.image.thumb}/>
                        </div>
                        <div className={a.name}><NavLink to={"/details/" + car.id}>{car.name}</NavLink></div>
                        <div className={a.description}>
                            <ul>
                                <li>{car.brand.name}</li>
                                <li>{car.model.name}</li>
                                <li>{car.mileage}</li>
                                <li>{car.fueltype.name}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Auto;