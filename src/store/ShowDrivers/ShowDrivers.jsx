import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../actions/DriversActions";

const ShowDrivers = () => {
  
    const drivers = useSelector(state => state.drivers);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getDrivers())
    }, [])

    return (
    <div>
        {drivers && drivers.map((driver, index) => {
            return <div key={index}>
                    <h3>Driver Name: {driver.name}</h3>
                    <p>Team: {driver.team}</p>
                </div>
        })}
    </div>
  )
}

export default ShowDrivers