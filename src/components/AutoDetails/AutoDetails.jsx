import a from './AutoDetails.module.css'
import {NavLink, useParams} from "react-router-dom"

const AutoDetails = (props) => {
    const { id } = useParams()
    const carsFilter = props.cars.find(x => x.id === `${ id }`)
    return (
        <div>
            <div>
                <img src={props.cars.find(x => x.id === `${ id }`).image.full}/>
            </div>
            <div>{carsFilter.name}</div>
            <div>{carsFilter.brand.name}</div>
            <div>{carsFilter.model.name}</div>
            <div>{carsFilter.mileage}</div>
            <div>{carsFilter.fueltype.name}</div>
        </div>
    )

}


export default AutoDetails;