import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id)=>{
      axios.delete('http://localhost:5000/exercises/'+id)
       .then(res=> console.log(res.data))
       setExercises(exercises.filter(e => e._id !== id))
  }


  const ExerciseList =()=>{
    return (
        exercises.map(exe => (
            <Exercise exercise={exe} deleteExercise={deleteExercise} key={exe._id} />
        ))
    )
}

  return (
    <div>
    <h3>Logged Exercises</h3>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { <ExerciseList/> }
      </tbody>
    </table>
  </div>)
};

export default ExercisesList;

const Exercise = ({exercise,deleteExercise})=> (
    <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0,10)}</td>
        <td>
            <Link to={'/edit/'+exercise._id} >Edit</Link> | <a href="#" onClick={()=>deleteExercise(exercise._id)} >Delete</a>
        </td>
    </tr>
)