import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import axois from "axios";
import { useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const EditExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuratioon] = useState(0);
  const [date, setDate] = useState(new Date());
  const param = useParams().id;
  useEffect(() => {
    axois
      .get(`http://localhost:5000/exercises/${param}`)
      .then((res) => {
        const data = res.data;
        console.log(data.username);
        setDescription(data.description);
        setDate(new Date(data.date));
        setDuratioon(data.duration);
        setUsername(data.username);
      })
      .catch((err) => console.log(err));
  }, [param]);

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
    axois
      .post(`http://localhost:5000/exercises/update/${param}`, exercise)
      .then((res) => console.log(res.data));
    alert("Exercise Updated Successfully !");
    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="Username">Username: </label>
          <input
            required
            className="form-control"
            value={username}
            onChange={(e) => onChangeUsername(e)}
          ></input>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => onChangeDescription(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => onChangeDuration(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => onChangeDate(date)}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
