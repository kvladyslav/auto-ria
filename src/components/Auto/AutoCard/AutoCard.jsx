import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {parkingCreator, compareCreator} from "../../../redux/carsReducer";
import styled from 'styled-components';

const AutoItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e3e4;
  min-height: 200px;
  width: 50%;
  margin-bottom: 20px;
  padding: 0 0 20px;    
`

const AutoImage = styled.img`
  width: 300px;
  height: 199px;
  cursor: pointer;
  padding: 0 8px 2px;
`

const Content = styled.div`
  margin-left: 15px;
  width: auto;
  padding: 0;
`

const LinkToAuto = styled(NavLink)`
  font-size: 18px;
  color: #256799;
  line-height: 1.2;
  text-decoration: none;
  &:visited {
    color: #4d7099;
  }
`

const Price = styled.div`
  margin-bottom: 3px;
  margin-top: 7px;
`

const USD = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #3c9806;
`

const Point = styled.span`
  display: inline-block;
  padding: 0 5px;
  color: #9b9b9b;
`

const DescriptionList = styled.ul`
  display: inline-block;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const DescriptionItem = styled.li`
  display: list-item;
  padding-top: 5px;
  width: 50%;
  line-height: 20px;
  overflow: hidden;
  float: left;
  text-overflow: ellipsis;
`

const DescriptionIcon = styled.i`
  margin: -4px 4px 0 0;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
`

const Mileage = styled(DescriptionIcon)`
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='7.5' cy='7.5' r='7' stroke='%23DB5C4C'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' stroke='%23DB5C4C'/%3E%3Cpath d='m8.5 6.5 2-2' stroke='%23DB5C4C'/%3E%3Cpath d='m7.5 0.5v1.5m-7 5.5h1.5m12.5 0h-1.5m-10.5-5 1 1m9-1-1 1' stroke='%23DB5C4C'/%3E%3C/svg%3E%0A");
`

const FuelType = styled(DescriptionIcon)`
  background-image: url("data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.5 6.5V10.5M5.5 6.5H9.5M5.5 6.5L4.5 5.5M5.5 10.5H9.5M5.5 10.5L4.5 11.5M9.5 10.5V6.5M9.5 10.5L10.5 11.5M9.5 6.5L10.5 5.5' stroke='%23DB5C4C' stroke-linecap='round'/%3E%3Cpath d='M1.5 13V6.53553C1.5 5.87249 1.76339 5.23661 2.23223 4.76777L3.76777 3.23223C4.23661 2.76339 4.87249 2.5 5.53553 2.5H10C10.8284 2.5 11.5 1.82843 11.5 1V0.5H12C12.8284 0.5 13.5 1.17157 13.5 2V13C13.5 13.8284 12.8284 14.5 12 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13Z' stroke='%23DB5C4C'/%3E%3Cpath d='M11.5 0.5H8C7.17157 0.5 6.5 1.17157 6.5 2V2.5' stroke='%23DB5C4C'/%3E%3Cpath d='M0.5 3.5L2.5 1.5' stroke='%23DB5C4C' stroke-linecap='round'/%3E%3C/svg%3E%0A");
`

const Location = styled(DescriptionIcon)`
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='6' r='2.5' stroke='%23DB5C4C'/%3E%3Cpath d='m13.5 6c0 2.321-1.4052 4.7061-2.8904 6.5627-0.73381 0.9172-1.4688 1.6829-2.0206 2.2194-0.23486 0.2284-0.43598 0.4146-0.58896 0.5528-0.15297-0.1382-0.3541-0.3244-0.58896-0.5528-0.55183-0.5365-1.2868-1.3022-2.0206-2.2194-1.4852-1.8566-2.8904-4.2417-2.8904-6.5627 0-3.0376 2.4624-5.5 5.5-5.5 3.0376 0 5.5 2.4624 5.5 5.5z' stroke='%23DB5C4C'/%3E%3C/svg%3E%0A");
`

const Model = styled(DescriptionIcon)`
  background-image: url("data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='14' height='14' rx='7' stroke='%23DB5C4C'/%3E%3Cpath d='M3.81543 11L6.83936 3.12598H7.96191L11.1846 11H9.99756L9.0791 8.61523H5.78662L4.92188 11H3.81543ZM6.0874 7.7666H8.75684L7.93506 5.58594C7.68441 4.9235 7.49821 4.37923 7.37646 3.95312C7.2762 4.45801 7.13477 4.95931 6.95215 5.45703L6.0874 7.7666Z' fill='%23DB5C4C'/%3E%3C/svg%3E%0A");
`

const Vin = styled.div`
  margin: 6px 0;
`

const VinInfo = styled.span`
  margin-right: 0;
  background: #fff;
  border: 1px solid #256799;
  font-size: 13px;
  line-height: 19px;
  display: inline-block;
  position: relative;
  padding: 0 10px;
  border-radius: 2px;
`

const Info = styled.p`
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 4px 0 7px;
  overflow: hidden;
  line-height: 18px;
  text-transform: lowercase;
`

const ShortInfo = styled(Info)`
  max-height: 18px;
`

const FullInfo = styled(Info)`
  max-height: 72px;
`

const ButtonInfo = styled.button`
  background: #fff;
  border: none;
  position: absolute;
  color: #256799;
  font-size: 24px;
  cursor: pointer;
  right: 0;
  bottom: 2px;
  padding: 0 2px 0 5px;
`

const DateAdded = styled.span`
  color: #9b9b9b;
`

const DateAddedIcon = styled.i`
  margin: -4px 4px 0 0;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7 S11.9,15,8,15z' fill='%239b9b9b'%3E%3C/path%3E%3Cpath d='M8,5.5C8,5.2,7.8,5,7.5,5S7,5.2,7,5.5V9h4.5C11.8,9,12,8.8,12,8.5S11.8,8,11.5,8H8V5.5z' fill='%239b9b9b'%3E%3C/path%3E%3C/svg%3E");
  display: inline-block;
  vertical-align: middle;
`

const Status = styled.div`
  float: right;
`

const Compare = styled.span`
  margin-left: 5px;
`

const Parking = styled.span`
  display: inline-block;
  margin-left: 5px;
`

const Check = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`

const CheckCompare = styled(Check)`
  margin: -7px 0 0 0;
  width: 28px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='compare' width='34' height='20' viewBox='0 0 34 20'%3E%3Cpath d='M10 13C10 15.8 7.8 18 5 18 2.2 18 0 15.8 0 13 2 13 8 13 10 13Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M26 13C26 15.8 23.8 18 21 18 18.2 18 16 15.8 16 13 18 13 24 13 26 13Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M15 2C14 2 12 2 11 2 11 .9 11.9 0 13 0 14.1 0 15 .9 15 2Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M21 2H5V3H21V2Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M9 12 5.4 3H4.6L1 12H0L4 2H6L10 12H9Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M25 12 21.4 3H20.6L17 12H16L20 2H22L26 12H25Z' fill='%23256799'%3E%3C/path%3E%3C/svg%3E");
`

const CheckParking = styled(Check)`
  width: 24px;
  height: 24px;
  margin: -8px 0 0;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 3L14.9389 8.95492L21.5106 9.90983L16.7553 14.5451L17.8779 21.0902L12 18L6.12215 21.0902L7.24472 14.5451L2.48944 9.90983L9.06107 8.95492L12 3Z' stroke='%23256799' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
`

const CheckCompareSelected = styled(CheckCompare)`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='compare' width='34' height='20' viewBox='0 0 34 20'%3E%3Cpath d='M10 13C10 15.8 7.8 18 5 18 2.2 18 0 15.8 0 13 2 13 8 13 10 13Z' fill='%23dc5d4d'%3E%3C/path%3E%3Cpath d='M26 13C26 15.8 23.8 18 21 18 18.2 18 16 15.8 16 13 18 13 24 13 26 13Z' fill='%23dc5d4d'%3E%3C/path%3E%3Cpath d='M15 2C14 2 12 2 11 2 11 .9 11.9 0 13 0 14.1 0 15 .9 15 2Z' fill='%23dc5d4d'%3E%3C/path%3E%3Cpath d='M21 2H5V3H21V2Z' fill='%23dc5d4d'%3E%3C/path%3E%3Cpath d='M9 12 5.4 3H4.6L1 12H0L4 2H6L10 12H9Z' fill='%23dc5d4d'%3E%3C/path%3E%3Cpath d='M25 12 21.4 3H20.6L17 12H16L20 2H22L26 12H25Z' fill='%23dc5d4d'%3E%3C/path%3E%3C/svg%3E");
`

const CheckParkingSelected = styled(CheckParking)`
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 3L14.9389 8.95492L21.5106 9.90983L16.7553 14.5451L17.8779 21.0902L12 18L6.12215 21.0902L7.24472 14.5451L2.48944 9.90983L9.06107 8.95492L12 3Z' fill='%23F09213' stroke='%23F09213' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
`

const AutoCard = (props) => {
    // const [checked, setChecked] = React.useState(
    //     JSON.parse(localStorage.getItem('allCars')) ||
    //     {
    //         id: JSON.parse(localStorage.getItem('allCars')) === null ? ''
    //             : JSON.parse(localStorage.getItem('allCars')).id,
    //         parking: JSON.parse(localStorage.getItem('allCars')) === null ? false
    //             : JSON.parse(localStorage.getItem('allCars')).parking,
    //         compare: JSON.parse(localStorage.getItem('allCars')) === null ? false
    //             : JSON.parse(localStorage.getItem('allCars')).compare,
    //     }
    // );

    const [checked, setChecked] = React.useState({
        compare: false,
        parking: false
    });

    const [active, setActive] = React.useState('shortInfo')

    const ShowShortInfo = () => {
        return (
            <ShortInfo>
                <span>{props.car.info}</span>
                <ButtonInfo onClick={() => setActive('fullInfo')}>...</ButtonInfo>
            </ShortInfo>
        )
    }


    const ShowFullInfo = () => {
        return (
            <FullInfo>
                <span>{props.car.info}</span>
                <ButtonInfo onClick={() => setActive('shortInfo')}>...</ButtonInfo>
            </FullInfo>
        )
    }

    // useEffect(() => {
    //     localStorage.setItem('allCars', JSON.stringify(checked))
    // }, [checked])


    // const handleChange = (e) => {
    //     const { name, id } = e.target;
    //     setChecked({
    //         ...checked,
    //         id: id,
    //         [name]: !checked[name]
    //     })
    // }

    const handleChange = (e) => {
        const { name } = e.target;
        setChecked({
            ...checked,
            [name]: !checked[name]
        })
    }

    props.dispatch(parkingCreator(checked.parking?.toString(), props.car.id));
    props.dispatch(compareCreator(checked.compare?.toString(), props.car.id));

    return (
        <AutoItem>
            <div>
                <AutoImage src={`${props.car.image.full}`}/>
            </div>
            <Content>
                <LinkToAuto to={"/details/" + props.car.id}>{props.car.name}</LinkToAuto>
                <Price>
                    <USD>{props.car.price.usd} $ </USD>
                    <Point>•</Point>
                    <span> {props.car.price.uah} uah</span>
                </Price>
                <div>
                    <DescriptionList>
                        <DescriptionItem>
                            <Mileage /><span> {props.car.mileage} ths km</span>
                        </DescriptionItem>
                        <DescriptionItem>
                            <FuelType /><span> {props.car.fueltype.name}</span>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Location /><span> {props.car.city}</span>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Model /><span> {props.car.model.name}</span>
                        </DescriptionItem>
                    </DescriptionList>
                    <Vin>
                        <VinInfo>{props.car.vin}</VinInfo>
                    </Vin>
                    <div>{active === 'shortInfo' && <ShowShortInfo />}</div>
                    <div>{active === 'fullInfo' && <ShowFullInfo />}</div>
                </div>
                <div>
                    <DateAdded>
                        <DateAddedIcon />
                        <span> {props.car.date_added}</span>
                    </DateAdded>
                    <Status>
                        <Compare>
                            <label>
                                <input
                                    type="checkbox"
                                    id={props.car.id}
                                    value={checked.compare}
                                    onClick={handleChange}
                                    name="compare"
                                />
                                {checked.compare === false  ? <CheckCompare/> : <CheckCompareSelected/>}
                            </label>
                        </Compare>
                        <Parking>
                            <label>
                                <input
                                    type="checkbox"
                                    id={props.car.id}
                                    value={checked.parking}
                                    onClick={handleChange}
                                    name="parking"
                                />
                                {checked.parking === false  ? <CheckParking/> : <CheckParkingSelected/>}
                            </label>
                        </Parking>
                    </Status>
                </div>
            </Content>
        </AutoItem>
    );
}

export default AutoCard;