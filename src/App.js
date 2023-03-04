import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './routes/Home/Home';
import Films from './routes/Films/Films';
import Planets from './routes/Planets/Planets';
import People from './routes/People/People';
import Error from './error';
import PlanetItem from './routes/Planets/PlanetItem';
import './App.css'


function App() {
    return (
        <div className="App">
        <ul className='navbar'>
            <li ><NavLink to="/" className='Nav-But'>Star Wars</NavLink></li>
            <li ><NavLink to="/people" className='Nav-But'>People</NavLink></li>
            <li ><NavLink to="/planets" className='Nav-But'>Planets</NavLink></li>
            <li ><NavLink className='Nav-But' to="/films">Films</NavLink></li>
        </ul>
        <div className='page-Break'>
        <Routes>
            <Route path="/" element={<Home/>} errorElement={<Error/>}/>
            <Route path="/films/*" element={<Films />} errorElement={<Error/>}/> 
            <Route path="/people/*" element={<People />} errorElement={<Error/>}/>
            <Route path="/planets/*" element={<Planets />} errorElement={<Error/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
        </div>
        </div>
            )
}

export default App
