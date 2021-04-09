import React, { useEffect,useState }from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
const Users = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
   
    axios.get('https://mern-stack-simple-exercise-app.herokuapp.com/users')
    .then( async(res)=>{
     const data = await res.data
       setUser(data)
    
    })
    .catch(err=>console.error(err))

  },[])

  const deleteUser = (id)=>{
    axios.delete('https://mern-stack-simple-exercise-app.herokuapp.com/users/'+id)
     .then(res=> console.log(res.data))
     setUser(user.filter(e => e._id !== id))
}

console.log(user)

  const UserList =()=>{
    return (
      user?.map(u => (
        <User user={u} deleteUser={deleteUser} key={u._id} />
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
          <th>Registration Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { <UserList/> }
      </tbody>
    </table> 
        </div>
    )

  }
export default Users

const User = ({user,deleteUser})=> (
  <tr>
      <td>{user.username}</td>
      <td>{user.createdAt.substring(0,10)}</td>
      <td>
         Delete User  <a href="#" onClick={()=>deleteUser(user._id)} ><i style={{color:"red"}} className="fa fa-trash"></i></a>
      </td>
  </tr>
)