import React, {useEffect} from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import axois from 'axios'

import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuratioon] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([""]);

useEffect(() => {
    axois.get('https://mern-stack-simple-exercise-app.herokuapp.com/users')
    .then((res)=>{
        const data = res.data 
        console.log()
        setUsers(data.map((e)=>e.username))
        setUsername(data[0].username)
    } )
    .catch(err => console.log(err))

}, [])

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuratioon(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const submit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };
    console.log(exercise);
    axois.post('https://mern-stack-simple-exercise-app.herokuapp.com/add', exercise)
        .then(res=>console.log(res.data))
        alert('New Exercise Assigned Successfully !')
        window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="Username">Username: </label>
          <select
            
            required
            className="form-control"
            value={username}
            onChange={e=> onChangeUsername(e)}
          >
            {users.map((user, ind) => (
              <option key={ind} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={e=>onChangeDescription(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            value={duration}
            onChange={e=>onChangeDuration(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
            <label>Date: </label>
           <div>
               <DatePicker
                selected={date}
                onChange={date=>onChangeDate(date)}
               />
           </div>
        </div>
        <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
      </form>
    </div>
  );
};

export default CreateExercise;
