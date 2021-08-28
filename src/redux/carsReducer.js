import allCars from "../all-cars.json";

const PARKING = 'PARKING';
const COMPARE = 'COMPARE';

let initialState = allCars;


const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PARKING:
            switch (action.parkingState) {
                case 'false':
                    state.find(x => x.id === action.carId).parkingState = 'not parked';
                    return state;
                case 'true':
                    state.find(x => x.id === action.carId).parkingState = 'parked';
                    return state;
                default:
                    return state;
            }
        case COMPARE:
            switch (action.compareState) {
                case 'false':
                    state.find(x => x.id === action.carId).compareState = 'not added';
                    return state;
                case 'true':
                    state.find(x => x.id === action.carId).compareState = 'added';
                    return state;
                default:
                    return state;
            }
        default:
            return state;
    }
}

export const parkingCreator = (newState, carId) =>
    ({type: PARKING, parkingState: newState, carId: carId})

export const compareCreator = (newState, carId) =>
    ({type: COMPARE, compareState: newState, carId: carId})

export default carsReducer;