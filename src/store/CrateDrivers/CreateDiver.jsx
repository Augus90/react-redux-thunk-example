import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addDriver } from '../actions/DriversActions';

export const CreateDiver = () => {

    const name = useRef();
    const team = useRef();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addDriver({
                name: name.current.value,
                team: team.current.value,
        }));

        name.current.value = "";
        team.current.value = "";
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' ref={name} placeholder='Name'/>
            <label>Team</label>
            <input type='text' ref={team} placeholder='Team'/>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
