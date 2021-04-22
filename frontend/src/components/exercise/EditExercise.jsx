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
      .get(
        `http://mern-stack-simple-exercise-app.herokuapp.com/exercises/${param}`
      )
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
      .post(
        `https://mern-stack-simple-exercise-app.herokuapp.com/exercises/update/${param}`,
        exercise
      )
      .then((res) => console.log(res.data));

    alert("Exercise Updated Successfully ");
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };

  return (
  );
};

export default EditExercise;
