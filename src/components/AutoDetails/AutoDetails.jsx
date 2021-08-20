import a from './AutoDetails.module.css'
import {NavLink, useParams} from "react-router-dom"
import React from "react";
import {parkingCreator} from "../../redux/carsReducer";


const AutoDetails = (props) => {
    const { id } = useParams()

    const carsFilter = props.cars.find(x => x.id === `${ id }`)
    const carId = `${ id }`

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }

    props.dispatch(parkingCreator(checked.toString(), carId));

    return (
        <div>
            <div>
                <img src={carsFilter.image.full}/>
            </div>
            <div>{carsFilter.name}</div>
            <div>{carsFilter.brand.name}</div>
            <div>{carsFilter.model.name}</div>
            <div>{carsFilter.mileage}</div>
            <div>{carsFilter.fueltype.name}</div>
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
        </div>
    )

}


export default AutoDetails;