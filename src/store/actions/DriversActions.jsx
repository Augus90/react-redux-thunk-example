
const getAllDrivers = async () => {
     const drivers = await localStorage.getItem('drivers') ? localStorage.getItem('drivers') : '[]';

    return JSON.parse(drivers);
}

const createDriver = async (newDriver) => {
    const drivers = await getAllDrivers(); 
    localStorage.setItem('drivers', JSON.stringify([...drivers, newDriver]))
    return newDriver;
}

export const addDriver = (driver) => {
    return async (dispatch) => {

        const driverCreated = await createDriver(driver);

         dispatch({
            type: 'ADD_DRIVER',
            payload: driverCreated,
        })
    }
}
export const getDrivers = () => {
    return async (dispatch) => {

        const drivers = await getAllDrivers();

         dispatch({
            type: 'GET_DRIVERS',
            payload: drivers,
        })
    }
}