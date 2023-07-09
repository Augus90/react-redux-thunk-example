
const initialState = {
    drivers: []
}

export default function DriversReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_DRIVER':
            return{
                ...state,
                drivers: [...state.drivers, action.payload]
            };
        case "GET_DRIVERS":
            return{
                ...state,
                drivers : action.payload
            }
            
        default:
            return state;
    }
}