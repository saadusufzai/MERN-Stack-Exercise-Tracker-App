import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to='/' className='navbar-brand'>ExerciseTracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item mr-2">
                        <Link to='/' className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item mr-2">
                        <Link to='/create' className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item mr-2">
                        <Link to='/users' className="nav-link">Users</Link>
                    </li>
                    <li className="navbar-item mr-2">
                        <Link to='/create-user' className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
