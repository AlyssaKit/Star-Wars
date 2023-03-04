import { Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'
import PeopleItem from './PeopleItem'
import './../../../src/App.css'
import people from '../../data/people.json'
import Error from '../../error'



function PlainPeople(){
    return (
        <>
            <p>Click on a Person to see more details</p>
        </>
    )
}

function People() {
    function makesideLinks () {
        let peopleLinks = [""]
        for (let i = 1; i <= 88; i++) {
            if(i !== 17){
                peopleLinks.push(
                    <li key={i} className="scrolling">
                        <NavLink to={people[i].url} className='side-Nav-but'>{people[i].name}</NavLink>
                    </li>
                )
            }
       }
        return peopleLinks
    }
    return (
      <>
        <ul className='side-Nav'>
            {makesideLinks()}
        </ul>
        <div className='bodyImg'>
        <div className='side-Nav-break'>
            <header className="App-header">
                <h1 className="page-Head">People</h1>
            </header>
            <div className='page-Content'>
                <Routes>
                    <Route path="/" element={<PlainPeople/>}/>
                    <Route path=":peopleItem" element={<PeopleItem/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
            </div>
        </div>
        </div>
      </>
    )
}
  
  export default People