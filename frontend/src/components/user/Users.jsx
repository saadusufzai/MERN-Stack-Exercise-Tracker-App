import React from 'react'

const Users = () => {
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
        {/* { <ExerciseList/> } */}
      </tbody>
    </table> 
        </div>
    )
}

export default Users
