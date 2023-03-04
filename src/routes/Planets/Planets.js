import { Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'
import PlanetItem from './PlanetItem'
import './../../../src/App.css'
import planets from '../../data/planets.json'
import Error from '../../error'



function PlainPlanets(){
    return (
        <>
            <p>Click on a Planet to see more details</p>
        </>
    )
}


function Planets() {
    function makesideLinks () {
        let planetsLinks = [""]
        for (let i = 1; i <= 61; i++) {
            planetsLinks.push(
                <li key={i} className="scrolling">
                    <NavLink to={planets[i].url} className='side-Nav-but'>{planets[i].name}</NavLink>
                </li>)
       }
        return planetsLinks
    }
    return (
      <>
        <ul className='side-Nav'>
            {makesideLinks()}
        </ul>
        <div className='bodyImg'>
        <div className='side-Nav-break'>
            <header className="App-header">
                <h1 className="page-Head">Planets</h1>
            </header>
            <div className='page-Content'>
                <Routes>
                    <Route path="/" element={<PlainPlanets/>} errorElement={<Error/>}/>
                    <Route path=":planetItem" element={<PlanetItem/>} errorElement={<Error/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
            </div>
        </div>
        </div>
      </>
    )
}
  
  export default Planets