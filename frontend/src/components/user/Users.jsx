import React, { useEffect,useState }from 'react'
import axios from 'axios'

const Users = () => {

  const [username, setUsername] = useState()

  useEffect(() => {
    const config = {
    
    header : {
      "Access-Control-Allow-Origin" : "",
      "Allow": "GET",
      "Content-type": "Application/json",
    }
  }
    axios.get('localhost:5000/users/',config)
    .then((res)=>{
      console.log(res)
      setUsername(res)

    })
    .catch(err=>console.error(err))

  },[])



    return (
        <div>
             <h3>Logged Exercises</h3>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Username</th>
          <th>Registration Date</th>
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
