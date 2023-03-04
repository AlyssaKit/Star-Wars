import React from 'react'
import { useParams } from 'react-router-dom'
import films from '../../data/films.json'
import { Link } from 'react-router-dom'

function FilmItem() {
    const { filmItem } = useParams()
    const  filmItemData = films[filmItem]
    function characterprint (){
        const characterLinks = []
        for (let i = 0; i < filmItemData.characters.length; i++) {
            characterLinks.push(
                <li key={i}>
                    <Link to={filmItemData.characters[i]} className="bodyLink">{filmItemData.characters[i]}</Link>
                </li>
            )
        }
        return characterLinks
    }
    function planetsprint (){
        const planetsLinks = []
        for (let i = 0; i < filmItemData.planets.length; i++) {
            planetsLinks.push(
                <li key={i} >
                    <Link to={filmItemData.planets[i]} className="bodyLink">{filmItemData.planets[i]}</Link>
                </li>
            )
        }
        return planetsLinks
    }
    if(filmItemData === undefined){
        return (
            <div>
                <h1>Error 404</h1>
                <h2>Film not found</h2>
            </div>
        )
    }else{
        return (
        <>
            <div>
                <h2>{filmItemData.title}</h2>
                <h3>Episode:</h3>
                <p>{filmItemData.episode_id}</p>
                <h3>Opening Crawl:</h3>
                <p>{filmItemData.opening_crawl}</p>
                <h3>Director:</h3>
                <p>{filmItemData.director}</p>
                <h3>Producer:</h3>
                <p>{filmItemData.producer}</p>
                <h3>Release Date:</h3>
                <p>{filmItemData.release_date}</p>
                <h3>Characters:</h3>
                <ul>
                    {characterprint()}
                </ul>
                <h3>Planets:</h3>
                <ul>
                    {planetsprint()}
                </ul>
            </div>
        </>
    )
        }
}

export default FilmItem