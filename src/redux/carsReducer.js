import allCars from "../all-cars.json";

const PARKING = 'PARKING';

let initialState = allCars;

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PARKING:
            state.find(x => x.id === action.carId).newState = action.newState
            return state;
        default:
            return state;
    }
}

export const parkingCreator = (newState, carId) =>
    ({type: PARKING, newState: newState, carId: carId})

export default carsReducer;