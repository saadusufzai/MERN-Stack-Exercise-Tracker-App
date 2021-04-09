
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get("https://mern-stack-simple-exercise-app.herokuapp.com/exercises/")
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id)=>{
      axios.delete('https://mern-stack-simple-exercise-app.herokuapp.com/exercises/'+id)
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
            <Link to={'/edit/'+exercise._id} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link> | <a href="#" onClick={()=>deleteExercise(exercise._id)} ><i style={{color:"red"}} class="fa fa-trash"></i></a>
        </td>
    </tr>
)