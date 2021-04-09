import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer'

import ExercisesList from "./components/exercise/ExercisesList";
import EditExercise from "./components/exercise/EditExercise";
import CreateExercise from "./components/exercise/CreateExercise";
import Users from './components/user/Users';
import CreateUser from "./components/user/CreateUser";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container p-4'>     <Routes>
        <Route path='/' element={<ExercisesList/>}/>
        <Route path='/edit/:id' element={<EditExercise/>}/>
        <Route path='/create' element={<CreateExercise/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/create-user' element={<CreateUser/>}/>
      </Routes>
      </div>
      <Footer/>
 
    </Router>
  );
}

export default App;
