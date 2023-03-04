import films from '../../data/films.json'
import { Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'
import FilmItem from './FilmItem'
import './../../../src/App.css'
import Error from '../../error'

function PlainFilm(){
    return (
        <>
            <p>Click on a film to see more details</p>
        </>
    )
}
function Films() {
    function makesideLinks () {
       const filmLinks = [""]
         for (let i = 1; i <= 7; i++) {
            filmLinks.push(
                <li key={i} className="scrolling">
                    <NavLink to={films[i].url} className='side-Nav-but'>{films[i].title}</NavLink>
                </li>
            )
        }
         return filmLinks
    }
    return (
      <>
        <ul className='side-Nav'>
            {makesideLinks()}
        </ul>
        <div className='bodyImg'>
        <div className='side-Nav-break'>
            <header className="App-header">
                <h1 className="page-Head">Films</h1>
            </header>
            <div className='page-Content'>
                <Routes>
                    <Route path="/" element={<PlainFilm/>}/>
                    <Route path=":filmItem" element={<FilmItem/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
            </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Films 
